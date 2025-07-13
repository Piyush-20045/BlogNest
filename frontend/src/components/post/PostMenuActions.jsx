import { useNavigate, useParams } from "react-router-dom";
import { useBlogs } from "../../BlogContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PostMenuActions = () => {
  const { fetchBlogs } = useBlogs();
  const { id } = useParams();
  const navigate = useNavigate();

  // to delete a blog
  const deleteBlog = async () => {
    const confirmDelete = window.confirm("Do you want to delete it?");
    if (!confirmDelete) return;
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_PORT}/api/blogs/${id}`, {
        method: "DELETE",
      });
      toast.success("Blog deleted successfully!");
      fetchBlogs();
      navigate("/posts");
    } catch (error) {
      toast.error("Error in deleting blog");
    }
  };
  return (
    <div className="mb-6">
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      {/* BOOKMARK btn */}
      <button className="flex mt-2 mb-2 px-3 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="23"
          height="23"
          viewBox="0 0 24 24"
        >
          <path d="M 6 2 C 4.8444444 2 4 2.9666667 4 4 L 4 22.039062 L 12 19.066406 L 20 22.039062 L 20 20.599609 L 20 4 C 20 3.4777778 19.808671 2.9453899 19.431641 2.5683594 C 19.05461 2.1913289 18.522222 2 18 2 L 6 2 z M 6 4 L 18 4 L 18 19.162109 L 12 16.933594 L 6 19.162109 L 6 4 z"></path>
        </svg>
        <span>Save this Post</span>
      </button>

      {/* EDIT btn */}
      <Link
        to={`/edit/${id}`}
        className="flex gap-0.5 text-sm cursor-pointer px-3 hover:underline hover:text-gray-800"
      >
        <img src="../edit.png" className="w-5 h-5" />
        <span>Edit this Post</span>
      </Link>
      {/* DELETE btn */}
      <button
        onClick={() => deleteBlog()}
        className="px-3 mt-2 flex gap-0.5 text-sm cursor-pointer hover:underline hover:text-gray-800"
      >
        <img src="../delete.png" className="w-5 h-5" />
        <span>Delete this Post</span>
      </button>
    </div>
  );
};

export default PostMenuActions;
