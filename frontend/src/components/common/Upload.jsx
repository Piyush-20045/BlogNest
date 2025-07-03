const Upload = () => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700">Pick Image :</label>
      <input
        type="file"
        accept="image/*"
        className="bg-white text-sm text-gray-600 border-2 border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100 cursor-pointer"
      />
    </div>
  );
};

export default Upload;
