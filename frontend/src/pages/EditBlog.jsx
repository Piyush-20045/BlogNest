import ReactQuill from "react-quill-new";
import Upload from "../components/common/Upload";
import { useState, useRef, useEffect } from "react";
import { useBlogs } from "../BlogContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { imgUrl, fetchBlogs, setImgUrl } = useBlogs();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const updatedData = { title, content, category, imgUrl };

  // fn to update the blog
  const updateBlog = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_PORT}/api/blogs/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      const data = await res.json();
      toast.success("Blog updated successfully!", {position:"top-center"});
      navigate(`/post/${id}`);
      fetchBlogs();
    } catch (error) {
      toast.error("Error in saving", {position:"top-center"});
    }
  };
  // Fetching journals
  useEffect(() => {
    const fetchJournal = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/api/blogs`);
      const data = await res.json();
      const blog = data.find((j) => j._id === id);
      setTitle(blog.title);
      setContent(blog.content);
      setCategory(blog.category);
      setImgUrl(blog.imgUrl);
    };
    fetchJournal();
  }, []);

  // quill-editor copy-paste the inline style too , so this function prevents it
  const quillRef = useRef();
  useEffect(() => {
    const editor = quillRef.current.getEditor();

    // Remove all formatting when pasting
    editor.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
      // Remove only style attributes (like background, font, etc.)
      delta.ops = delta.ops.map((op) => {
        if (op.attributes) {
          // Remove unwanted styles like background, color, font, etc.
          const { background, color, font, ...allowedAttrs } = op.attributes;
          return { insert: op.insert, attributes: allowedAttrs };
        }
        return op;
      });
      return delta;
    });
  }, []);

  return (
    <div className="h-full m-2 md:m-7 p-3 md:p-8 flex flex-col gap-7 border rounded-2xl bg-white">
      <h2 className="text-center font-title text-2xl md:text-4xl text-gray-800">Edit the blog</h2>

      {/* FORM */}
      <form onSubmit={updateBlog} className="flex flex-col gap-4 ">
        <div className="md:flex">
          <Upload />
          {/* CATEGORIES */}
          <div className="mt-3 md:mt-5 w-full md:w-fit md:ml-7 flex border rounded-md bg-gray-100 text-gray-700">
            <label htmlFor="category" className="w-full p-2">
              Select a category :
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 rounded outline-none bg-white text-sm text-gray-800 cursor-pointer"
            >
              <option value="Web Dev">Web Dev</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Fitness">Fitness</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
        </div>

        {/* BLOG TITLE */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="-mb-2 p-2 text-gray-700 text-3xl outline-none border rounded-md"
          required
        />

        {/* REACT QUILL TEXT EDITOR */}
        <ReactQuill
          theme="snow"
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline"],
              ["link"],
              [{ list: "ordered" }],
              ["clean"],
            ],
          }}
          ref={quillRef}
          value={content}
          onChange={setContent}
          className="customQuill"
        />
        {/* CREATE BUTTON */}
        <button
          type="submit"
          className="my-2 px-3 py-2 w-20 text-white bg-green-700 hover:bg-green-800 rounded-md transition duration-150 ease-in-out active:scale-95"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
