import { Link, useParams } from "react-router-dom";
import PostMenuActions from "../components/post/PostMenuActions";
import Comments from "../components/post/Comments";
import { useEffect, useState } from "react";
import { useBlogs } from "../BlogContext";

const SinglePostPage = () => {
  const { id } = useParams();
  const { blogs } = useBlogs();
  const [loading, setLoading] = useState(true);

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
          <h1 className="pt-5 px-4 text-3xl md:text-5xl text-gray-800 font-semibold">
            {blog.title}
          </h1>

          {/* AUTHOR and DATE */}
          <div className="mt-2 mx-6 text-gray-700 text-sm">
            <span>Piyush Yadav - </span>
            <span> 03 Jan 2025</span>
          </div>

          <div className="flex justify-center">
            <img
              src={blog.imageUrl}
              className="p-3 md:w-4/6 flex justify-center items-center rounded-2xl"
            />
          </div>

          {/* CONTENT */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="mt-4 mx-14 text-xl flex flex-col gap-3"
          ></div>
        </div>

        {/*RIGHT SIDEBAR MENU */}
        <div className="hidden md:block w-1/5 ml-6 tab:pl-12 h-full sticky top-16 tab:border-l-2 ">
          {/* USER IMAGE AND NAME */}
          <h1 className="mt-4 mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-3 mb-2 px-2">
            <div className="flex items-center gap-2">
              <img
                src="userImg.jpg"
                alt=""
                className="rounded-full object-cover w-8 h-8"
              />
              <Link>Piyush Yadav</Link>
            </div>
          </div>

          {/* FACEBOOK AND INSTA */}
          <div className="flex mb-6 pl-2.5 gap-2">
            <Link>
              <img src="facebook.svg" alt="" />
            </Link>
            <Link>
              <img src="instagram.svg" alt="" />
            </Link>
          </div>

          {/* SAVE AND DELETE ICONS */}
          <PostMenuActions />

          {/* CATEGORIES OPTIONS */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm mb-6 px-4">
            <Link className="underline" to="/posts?cat=All Posts">
              All
            </Link>
            <Link className="underline" to="/posts?cat=Web Dev">
              Web Dev
            </Link>
            <Link className="underline" to="/posts?cat=Technology">
              Technology
            </Link>
            <Link className="underline" to="/posts?cat=Finance">
              Finance
            </Link>
            <Link className="underline" to="/posts?cat=Fitness">
              Fitness
            </Link>
          </div>
        </div>
      </div>

      {/* COMMENTS SECTION */}
      <Comments />
    </div>
  );
};

export default SinglePostPage;
