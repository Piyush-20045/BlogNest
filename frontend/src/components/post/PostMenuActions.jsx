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
