import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "../styles/write.css";
import Upload from "../components/common/Upload";
import { useBlogs } from "../BlogContext";
import { useEffect, useRef } from "react";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const uploadRef = useRef();

  const {
    title,
    content,
    category,
    setTitle,
    setContent,
    setCategory,
    createBlog,
    fetchBlogs,
  } = useBlogs();

  if (isLoaded && !isSignedIn) {
    return (
      <div className="m-12 text-xl font-title text-center">
        Login to access this page...
      </div>
    );
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    createBlog();
    setTitle("");
    setContent("");
    uploadRef.current.reset();
    alert("Post created!");
    fetchBlogs();
  }

  // quill-editor copy-paste the inline style too , so this function prevents it
  const quillRef = useRef();
  useEffect(() => {
    const editor = quillRef.current.getEditor();

    // Remove all formatting when pasting
    editor.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
      // Remove only style attributes (like background, font, etc.)
      delta.ops = delta.ops.map(op => {
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
      {/* TITLE AND LOGO */}
      <div className="p-2 flex justify-center items-center gap-2 border rounded bg-gradient-to-r from-slate-400 to-slate-300">
        <h1 className="text-gray-800 text-2xl md:text-3xl font-title ">
          Create a New Post
        </h1>
        <img src="write.png" className="h-10 w-10" />
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="-mb-2 md:flex items-end">
          {/* COVER IMAGE */}
          <Upload ref={uploadRef}/>

          {/* CATEGORIES */}
          <div className="mt-4 w-full md:w-fit md:ml-7 flex border rounded-md bg-gray-100 text-gray-700">
            <label htmlFor="category" className="w-full p-2">
              Select a category :
            </label>
            <select
              id="category"
              name="cat"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="p-2 rounded outline-none bg-white text-sm text-gray-800 cursor-pointer"
            >
              <option value="Web Dev">Web Dev</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Fitness">Fitness</option>
              <option value="Marketing">Marketing</option>
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
        <button type="submit" className="my-2 px-3 py-2 w-20 text-white bg-green-700 hover:bg-green-800 rounded-md transition duration-150 ease-in-out active:scale-95">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
