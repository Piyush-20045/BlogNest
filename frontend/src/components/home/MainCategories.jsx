import { Link } from "react-router-dom";
import Search from "../common/Search";
const MainCategories = () => {
  return (
    <div className="hidden md:flex flex-wrap justify-center items-center p-4 mt-10 gap-8 rounded-3xl xl:rounded-full shadow-lg bg-white">
      {/* SEARCH */}
      <div>
        <Search />
      </div>

      <span className="hidden xl:block font-medium text-xl">|</span>

      {/* LINKS */}
      <div className="flex flex-wrap gap-10 flex-1">
        <Link
          to="/posts"
          className="px-4 py-2 rounded-full bg-gray-600 text-white "
        >
          All Posts
        </Link>

        <Link
          to="/posts?cat=Web Dev"
          className="px-4 py-2 rounded-full transition-all duration-200 ease-in-out hover:bg-gray-600 hover:text-white"
        >
          Web Dev
        </Link>

        <Link
          to="/posts?cat=Technology"
          className="px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white"
        >
          Technology
        </Link>

        <Link
          to="/posts?cat=Finance"
          className="px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white"
        >
          Finance
        </Link>

        <Link
          to="/posts?cat=Fitness"
          className="px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white"
        >
          Fitness
        </Link>

        <Link
          to="/posts?cat=Lifestyle"
          className="px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white"
        >
          Lifestyle
        </Link>
      </div>
    </div>
  );
};

export default MainCategories;
