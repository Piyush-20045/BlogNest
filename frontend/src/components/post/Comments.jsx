import { Link, useParams } from "react-router-dom";
import { useBlogs } from "../../BlogContext";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const Comments = () => {
  const [comment, setComment] = useState("");
  const { user } = useUser();
  const { id } = useParams();
  const { blogs, fetchBlogs } = useBlogs();
  const blog = blogs.find((j) => j._id === id);

  const createComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_PORT}/api/blogs/${id}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({
            userProfile: user.imageUrl,
            userName: user.fullName,
            comment,
          }),
        }
      );
      const data = await response.json();
      toast.success("Comment added");
      fetchBlogs();
      setComment("");
    } catch (error) {
      toast.error("Failed to add comment");
    }
  };
  return (
    <div className="m-3 p-1 md:w-4/5 rounded-lg">
      <h1 className="p-1 mt-4 text-blue-900 underline">Comments</h1>

      {/* INPUT AND COMMENT BTN */}
      <form
        onSubmit={createComment}
        className=" mt-3 py-2 md:p-2 rounded-xl bg-gray-100"
      >
        <input
          required
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="focus:outline-none w-11/12 tab:w-9/12 lg:w-10/12 h-12 p-3 m-2 rounded-md border-gray-400 border-2"
        />

        <button
          type="submit"
          disabled={!user}
          className="text-sm tab:text-base text-white bg-blue-700 ml-2 px-3 py-2 tab:py-3 rounded-md transition hover:bg-blue-600 active:scale-95"
        >
          {!user ? <Link to="/login">Login to comment!</Link> : "Comment"}
        </button>
      </form>

      {/* SINGLE COMMENTS */}
      {blog.comments.length > 0 ? (
        [...blog.comments].reverse().map((comment) => (
          <div className="p-4 mt-2 bg-gray-100 rounded-xl">
            {/* USER IMG AND NAME */}
            <div className="flex items-center gap-2 text-sm">
              <img
                src={comment.userProfile}
                alt=""
                className="h-8 w-8 rounded-full
                "
              />
              <span className="text-gray-800 font-medium">
                {comment.userName || "Anonymous"}
              </span>
              <span className="text-gray-500 text-sm">
                {comment.createdAt.slice(0, 10)}
              </span>
            </div>
            {/* comment */}
            <div className="ml-10 mt-2">{comment.comment}</div>
          </div>
        ))
      ) : (
        <div className="h-24 py-4 text-center bg-gray-100 font-medium text-gray-500 text-xl">
          There's no comment yet!
        </div>
      )}
    </div>
  );
};

export default Comments;
