import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useBlogs } from "../../BlogContext";
import { useParams } from "react-router-dom";

const Bookmark = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { blogs, fetchBlogs } = useBlogs();
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);
  const blog = blogs.find((j) => j._id === id);

  useEffect(() => {
    if (user && blog.bookmarkedBy?.includes(user.id)) {
      setBookmarked(true);
    } else {
      setBookmarked(false);
    }
  }, [user, blog]);

  const toggleBookmark = async () => {
    if (loading) return; // prevent spamming
    setBookmarked((prev) => !prev); // instantly update UI
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_PORT}/api/blogs/${id}/bookmark`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.id }),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        setBookmarked((prev) => !prev); // revert on error
        toast.error(data.message || "Bookmark failed");
      }
    } catch (err) {
      setBookmarked((prev) => !prev); // revert on error
      console.error("Error bookmarking:", err);
    } finally {
      setLoading(false);
      fetchBlogs(); // refresh bookmark list
    }
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
