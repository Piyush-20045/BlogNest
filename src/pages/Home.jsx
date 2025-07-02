import { Link } from "react-router-dom";
import MainCategories from "../components/home/MainCategories";
import FeaturedPosts from "../components/home/FeaturedPosts";
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
      <MainCategories />

      {/* FEATURED POSTS */}
      <FeaturedPosts/>

      {/* POST LIST */}
      <PostList/>
      
    </div>
  );
};

export default Home;
