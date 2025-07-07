import { Link } from "react-router-dom";
import { useBlogs } from "../../BlogContext";

const PostList = () => {
  const { blogs } = useBlogs();
  return (
    <div>
      <p className="mt-1 mb-6 text-lg text-center text-gray-600">
        Recent Posts
      </p>

      {/* All mapped blogs */}
      <div className="flex justify-center flex-wrap sm:space-x-2 space-y-2">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="mt-2 w-80 p-1 sm:w-72 bg-gray-50 border border-gray-300 rounded-md hover:shadow-lg transition-shadow"
          >
            <img src={blog.imgUrl} className="mx-auto rounded" />

            {/* DETAILS */}
            <div className="bg-white px-3 pt-1 rounded-lg flex flex-col gap-2">
              {/* title */}
              <span className="block text-gray-700 text-sm">
                {blog.category}
              </span>
              <Link
                to={`/post/${blog._id}`}
                className="text-xl sm:text-2xl font-semibold text-gray-800 line-clamp-2"
              >
                {blog.title}
              </Link>

              {/* Paragraph */}
              <p
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="text-gray-700 line-clamp-2"
              ></p>

              <Link
                to={`/post/${blog._id}`}
                className="-mt-2 text-sm text-blue-800 hover:underline"
              >
                Read more
              </Link>

              {/* name and category */}
              <div className="text-gray-600 text-sm">
                <span>{blog?.author?.name} - </span>
                <span>{blog.createdAt.slice(0, 10)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
