import { Link } from "react-router-dom";
import Search from "../components/common/Search";
import PostList from "../components/home/PostList";

const Home = () => {
  return (
    <div className="flex flex-col mx-6 tab:mx-12 my-7">
      {/* BREADCRUMBS */}
      <div className="flex gap-3">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>

      {/* Headers */}
      <div className="flex">
        <div>
          <h1 className="text-gray-800 text-5xl tab:w-4/5 tab:text-7xl font-bold font-title mt-10">
            BlogNest - Unleash Your Thoughts
          </h1>
          <p className="mt-6 tab:text-xl">
            Welcome to BlogNest, your digital space to share ideas, stories, and
            knowledge with the world.
          </p>
        </div>
      </div>

      {/* CATEGORIES */}
        <div className="hidden md:flex flex-wrap justify-center items-center mb-7 p-4 mt-10 gap-8 rounded-3xl xl:rounded-full shadow-lg bg-white">
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

      {/* POST LIST */}
      <PostList />
    </div>
  );
};

export default Home;
