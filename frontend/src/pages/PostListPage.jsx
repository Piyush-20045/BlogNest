import PostList from "../components/home/PostList";
import SideMenu from "../components/common/SideMenu";
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
          className="md:hidden ml-7 my-4 p-2 bg-gray-400 text-sm text-white rounded-md "
        >
          {Open ? "ⓧ Close" : "☰ More Categories"}
        </button>

        <div className={Open ? "block -mt-4" : "hidden"}>
          <SideMenu />
        </div>
      </div>

      {/* POSTLIST AND SIDEMENU */}
      <div className="flex mb-10">
        <div className="p-3 md:w-4/5">
          <PostList />
        </div>
        <div className="hidden md:block md:pr-12">
            <SideMenu/>
        </div>

      </div>
    </div>
  );
};

export default PostListPage;
