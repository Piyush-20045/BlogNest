import Search from "./Search";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="flex flex-col gap-1 m-2 border md:border-none rounded-xl shadow-md md:shadow-none md:sticky top-24 ">
      <Search />
      <span className="mt-6 mx-8 text-gray-700">Categories - </span>
      <div className="flex flex-col gap-2 text-sm ml-10 p-3">
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
        <Link className="underline" to="/posts?cat=Marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
