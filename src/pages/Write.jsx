import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new"

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="m-12 text-xl font-title text-center">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return (
      <div className="m-12 text-xl font-title text-center">
        Login to access this page...
      </div>
    );
  }

  return (
    <div className="h-full pt-6 md:p-7 mx-5 flex flex-col gap-7">
      {/* TITLE AND LOGO */}
      <div className="p-2 flex justify-center items-center gap-2 border-2 rounded-md bg-gray-300">
        <h1 className="text-2xl font-title font-medium">Create a New Post</h1>
        <img src="write.png" alt="" className="h-10 w-10" />
      </div>

      {/* ALL INPUTS AND BUTTONS IN THE FORM */}
      <form className="flex flex-col gap-6 ">
        {/* BLOG TITLE */}
        <input
          type="text"
          placeholder="Blog title here..."
          className="p-3 text-3xl font-semibold outline-none border rounded-md shadow-sm"
        />

        {/* COVER IMAGE */}
        <button className="p-2 md:w-1/5 bg-white rounded-md text-gray-600 border shadow-sm">
          Add a cover image
        </button>

        {/* CATEGORIES */}
        <div className="">
          <label htmlFor="" className="p-2 bg-gray-200 text-lg rounded-3xl">
            Select a category :
          </label>
          <select name="cat" className="p-2 rounded-3xl outline-none shadow-sm">
            <option value="Web Dev">Web Dev</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Fitness">Fitness</option>
            <option value="">Marketing</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <textarea
          name="desc"
          placeholder="Description"
          className="p-3 rounded-md outline-none shadow-md border"
        />

        {/* REACT QUILL TEXT EDITOR */}
        <ReactQuill theme="snow" className="h-80 bg-white" />

        {/* CREATE BUTTON */}
        <button className="my-16 md:my-10 px-4 py-3 w-20 bg-gray-400 hover:bg-gray-500 rounded-md font-semibold">
          Create
        </button>
      </form>
    </div>
  );
};

export default Write;
