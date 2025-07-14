import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useBlogs } from "../../BlogContext";
import { useParams } from "react-router-dom";

const Bookmark = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { blogs, fetchBlogs } = useBlogs();
  const [bookmarked, setBookmarked] = useState(false);
  const blog = blogs.find((j) => j._id === id);

  useEffect(() => {
    if (user && blog.bookmarkedBy?.includes(user.id)) {
      setBookmarked(true);
    }
  }, [user, blog]);

  const toggleBookmark = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_PORT}/api/blogs/${id}/bookmark`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      }
    );
    const data = await res.json();

    setBookmarked(data.isBookmarked);
    fetchBlogs();
  };

  if (!user) return null;

  return (
    <div className="relative group inline-block">
      <button
        onClick={toggleBookmark}
        className="w-4 transition duration-200 active:scale-95"
      >
        {bookmarked ? (
          <img src="/bookmarked.svg" alt="bookmarked" />
        ) : (
          <img src="/bookmark.svg" alt="bookmark" />
        )}
      </button>

      {/* Tooltip text */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition">
        {bookmarked ? "Remove Bookmark" : "Bookmark this blog"}
      </div>
    </div>
  );
};

export default Bookmark;
