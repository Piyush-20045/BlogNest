import PostList from "../components/home/PostList";
import Categories from "../components/common/Categories";
import Search from "../components/common/Search";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const PostListPage = () => {
  const [Open, setOpen] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.get("cat");

  return (
    <div>
      {/* TITLE */}
      <h1 className="ml-7 md:ml-16 mt-6 text-2xl font-serif">{category}</h1>

      {/* MOBILE--'MORE CATEGORIES OPTION' */}
      <div className="-mt-3 md:hidden">
        <button
          onClick={() => setOpen(!Open)}
          className="md:hidden ml-7 my-2 p-2 bg-gray-400 text-sm text-white rounded-md "
        >
          {Open ? "ⓧ Close" : "☰ More Categories"}
        </button>
        <div
          className={`transition-all duration-500 ease-out scale-95 ${
            Open ? "block -mt-4" : "hidden"
          }`}
        >
          <Categories />
        </div>
      </div>

      {/* POSTLIST AND SIDEMENU */}
      <div className="flex mb-10">
        <div className="p-3 md:w-4/5">
          {/* SEARCH */}
          <div className="md:mx-12">
            <Search />
          </div>
          <PostList />
        </div>
        <div className="hidden md:block md:pr-12">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
