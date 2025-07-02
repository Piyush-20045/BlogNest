import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex flex-wrap justify-center items-center p-4 mt-10 gap-8 rounded-3xl xl:rounded-full shadow-lg bg-white">

        {/* SEARCH */}
      <div className="flex items-center gap-2 p-2 rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="17"
          height="17"
          viewBox="0 0 30 30"
          stroke="gray"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
        <input type="text" placeholder="Search a post" className="focus:outline-none bg-transparent"/>
      </div>

      <span className="hidden xl:block font-medium text-xl">|</span>

      {/* LINKS */}
      <div className="flex flex-wrap gap-10 flex-1">
        <Link
          to="/posts?cat=All Posts"
          className="px-4 py-2 rounded-full bg-gray-500 text-white"
        >
          All Posts
        </Link>

        <Link
          to="/posts?cat=Web Dev"
          className="px-4 py-2 rounded-full hover:bg-gray-600"
        >
          Web Dev
        </Link>

        <Link
          to="/posts?cat=Technology"
          className="px-4 py-2 rounded-full hover:bg-gray-600"
        >
          Technology
        </Link>

        <Link
          to="/posts?cat=Finance"
          className="px-4 py-2 rounded-full hover:bg-gray-600"
        >
          Finance
        </Link>

        <Link
          to="/posts?cat=Fitness"
          className="px-4 py-2 rounded-full hover:bg-gray-600"
        >
          Fitness
        </Link>

        <Link
          to="/posts?cat=Marketing"
          className="px-4 py-2 rounded-full hover:bg-gray-600"
        >
          Marketing
        </Link>
      </div>

      
    </div>
  );
};

export default MainCategories;
