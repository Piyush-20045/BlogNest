import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-8 gap-8">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* IMAGE */}
        <img
          src="featured1.jpg"
          alt="Startup Photo"
          className=" object-cover rounded-2xl"
        />
        {/* DETAILS */}
        <div className="flex gap-2 text-gray-600 my-3 ">
          <h1 className="text-black font-bold">01.</h1>
          <Link>Finance</Link>
          <span className="text-xs pt-1 px-1 bg-gray-200 rounded-xl">
            2 DEC 2025
          </span>
        </div>
        {/* TITLE */}
        <Link
          to="/SinglePagePost"
          className="text-xl sm:text-3xl text-gray-800 font-semibold"
        >
          12 Key Factors for a Successful Startup in 2025
        </Link>
      </div>

      {/* Other Posts */}
      <div className="flex flex-col w-full lg:w-1/2 h-full gap-8 md:gap-12">
        {/* SECOND */}
        <div className="flex lg:h-1/3 gap-4 items-center">
          <img
            src="featured2.jpg"
            alt=""
            className=" rounded-xl w-1/3"
          />
          {/* Details and titles */}
          <div>
            {/* details */}
            <div className="flex gap-2 text-sm md:mb-4">
            <h1 className="text-black font-bold">02.</h1>
            <Link>Finance</Link>
            <span className="text-xs pt-1 px-1 bg-gray-200 rounded-xl">
              2 DEC 2025
            </span>
          </div>
          {/* title */}
            <Link
            to="test"
            className="text-base md:text-xl text-gray-800 font-semibold line-clamp-2"
          >
            18 Best Personal Finance Blogs To Follow In India
          </Link>
          </div>
        </div>

        {/* THIRD */}
        <div className="flex lg:h-1/3 gap-4 items-center">
          <img
            src="featured3.jpg"
            alt=""
            className=" rounded-xl object-cover w-1/3"
          />
          {/* Details and titles */}
          <div>
            {/* details */}
            <div className="flex gap-2 text-sm md:mb-4">
            <h1 className="text-black font-bold">03.</h1>
            <Link>Web Dev</Link>
            <span className="text-xs pt-1 px-1 bg-gray-200 rounded-xl">
              3 DEC 2025
            </span>
          </div>
          {/* title */}
            <Link
            to="SinglePagePost"
            className="text-base md:text-xl text-gray-800 font-semibold line-clamp-2"
          >
            Every basic things in web development that you must know about.
          </Link>
          </div>
        </div>
        
        {/* FOURTH */}
        <div className="flex lg:h-1/3 gap-4 items-center">
          <img
            src="featured4.webp"
            alt=""
            className=" rounded-xl object-cover w-1/3"
          />
          {/* Details and titles */}
          <div>
            {/* details */}
            <div className="flex gap-2 text-sm md:mb-4">
            <h1 className="text-black font-bold">04.</h1>
            <Link>Technology</Link>
            <span className="text-xs pt-1 px-1 bg-gray-200 rounded-xl">
              4 DEC 2025
            </span>
          </div>
          {/* title */}
            <Link
            to="SinglePagePost"
            className="text-base md:text-xl font-semibold text-gray-800 line-clamp-2"
          >
            How to Do the Good Morning Exercise—And Why You Should
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
