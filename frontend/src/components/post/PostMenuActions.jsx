import { useNavigate, useParams } from "react-router-dom";
import { useBlogs } from "../../BlogContext";

const PostMenuActions = () => {
  const { fetchBlogs } = useBlogs();
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteBlog = async () => {
    const confirmDelete = window.confirm("Do you want to delete it?");
    if (!confirmDelete) return;
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_PORT}/api/blogs/${id}`, {
        method: "DELETE",
      });
      alert("Blog deleted successfully!");
      fetchBlogs();
      navigate("/posts");
    } catch (error) {
      alert("Error in deleting blog", error);
    }
  };
  return (
    <div className="mb-6">
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex mt-2 mb-2 px-3 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="21"
          height="21"
          viewBox="0 0 24 24"
        >
          <path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"></path>
        </svg>
        <span>Save this Post</span>
      </div>

      <button
        onClick={() => deleteBlog()}
        className="flex text-sm cursor-pointer px-3 hover:text-gray-800"
      >
        <img src="../delete.svg" />
        <span>Delete this Post</span>
      </button>
    </div>
  );
};

export default PostMenuActions;
