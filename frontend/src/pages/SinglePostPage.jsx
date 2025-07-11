import { Link, useParams } from "react-router-dom";
import PostMenuActions from "../components/post/PostMenuActions";
import Categories from "../components/common/Categories";
import Comments from "../components/post/Comments";
import { useBlogs } from "../BlogContext";
import { useState } from "react";

const SinglePostPage = () => {
  const { id } = useParams();
  const { blogs } = useBlogs();
  const [showActions, setShowActions] = useState(false);

  const blog = blogs.find((j) => j._id === id);

  if (!blog) {
    return <div>Loading post...</div>;
  }

  return (
    <div className="p-1 md:p-6 mb-6 bg-white h-full">
      {/* POST AND SIDEBAR */}
      <div className="flex">
        {/* LEFT SIDE ALL CONTENT */}
        <div className="md:w-4/5">
          {/* TITLE */}
          <h1 className="pt-5 px-4 text-3xl md:text-4xl text-gray-800 font-semibold">
            {blog.title}
          </h1>

          {/* AUTHOR and DATE */}
          <div className="mt-2 mx-6 text-gray-700 text-sm">
            <span>{blog?.author?.name} - </span>
            <span>{blog.createdAt.slice(0, 10)}</span>

            {/* SHOW ACTIONS FOR MOBILE ONLY */}
            <div onClick={() => setShowActions(!showActions)} className="md:hidden">
              <div className="p-2 w-fit border rounded bg-blue-100 active:bg-blue-50">
                {/* SVG-ICON */}
                <svg
                  className={`mb-0.5 w-4 h-4 inline-block transition-transform duration-200 ${
                    showActions ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                More options
              </div>
              {showActions ? <PostMenuActions /> : null}
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={blog.imgUrl}
              className="p-3 md:w-4/6 flex justify-center items-center rounded-2xl"
            />
          </div>

          {/* CONTENT */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="mt-4 mx-3 md:mx-14 text-lg text-gray-800 flex flex-col gap-3"
          ></div>
        </div>

        {/*RIGHT SIDEBAR MENU */}
        <div className="hidden md:block w-1/5 ml-6 tab:pl-12 h-full sticky top-16 tab:border-l-2 ">
          {/* USER IMAGE AND NAME */}
          <h1 className="mt-4 mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-3 mb-2 px-2">
            <div className="flex items-center gap-2">
              <img
                src={blog?.author?.profilePhoto || "/profilePhoto.png"}
                className="rounded-full object-cover w-8 h-8"
              />
              <Link>{blog?.author?.name || "Anonymous"}</Link>
            </div>
          </div>

          {/* SAVE AND DELETE ICONS */}
          <PostMenuActions />

          {/* CATEGORIES OPTIONS */}
          <div className="-ml-9">
            <Categories />
          </div>
        </div>
      </div>

      {/* COMMENTS SECTION */}
      <Comments />
    </div>
  );
};

export default SinglePostPage;
