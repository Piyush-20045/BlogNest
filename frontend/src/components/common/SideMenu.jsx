import Search from "./Search";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="flex flex-col gap-1 m-2 border md:border-none rounded-xl shadow-md md:shadow-none md:sticky top-24 ">
      <Search />
      <span className="md:mt-6 mx-8 text-gray-700">Categories - </span>
      <div className="flex flex-col gap-2 text-sm ml-10 p-3">
        <Link className="hover:underline hover:text-gray-800" to="/posts">
          All
        </Link>
        <Link className="hover:underline hover:text-gray-800" to="/posts?cat=Web Dev">
          Web Dev
        </Link>
        <Link className="hover:underline hover:text-gray-800" to="/posts?cat=Technology">
          Technology
        </Link>
        <Link className="hover:underline hover:text-gray-800" to="/posts?cat=Finance">
          Finance
        </Link>
        <Link className="hover:underline hover:text-gray-800" to="/posts?cat=Fitness">
          Fitness
        </Link>
        <Link className="hover:underline hover:text-gray-800" to="/posts?cat=Lifestyle">
          Lifestyle
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
