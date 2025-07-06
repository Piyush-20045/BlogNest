import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import { useBlogs } from "../../BlogContext";

const Upload = forwardRef((props, ref) => {
  const fileInputRef = useRef();
  const { setImageUrl } = useBlogs();

  // Expose reset method to parent
  useImperativeHandle(ref, () => ({
    reset: () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    },
  }));

  // handleUpload fn for image upload
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const authRes = await fetch("http://localhost:5000/uploadAuth");
      const uploadAuth = await authRes.json();

      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);
      formData.append("folder", "BlogNest");
      formData.append("publicKey", uploadAuth.publicKey);
      formData.append("signature", uploadAuth.signature);
      formData.append("expire", uploadAuth.expire);
      formData.append("token", uploadAuth.token);

      const response = await fetch(
        "https://upload.imagekit.io/api/v1/files/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImageUrl(data.url);
      if (!response.ok) throw new Error(data.message || "Image upload failed");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="text-gray-700">Pick Image :</label>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        accept="image/*"
        className="bg-white text-sm text-gray-600 border-2 border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
      />
    </div>
  );
});

export default Upload;
