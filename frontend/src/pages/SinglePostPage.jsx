import { Link } from "react-router-dom";
import PostMenuActions from "../components/post/PostMenuActions";
import Search from "../components/common/Search";
import Comments from "../components/post/Comments";

const SinglePostPage = () => {
  return (
    <div className="p-1 md:p-6 mb-6 bg-white h-full">
      {/* POST AND SIDEBAR */}
      <div className="flex">
        {/* LEFT SIDE ALL CONTENT */}
        <div className="md:w-4/5">
          {/* SEARCH INPUTS */}
          <Search />

          {/* TITLE */}
          <h1 className="pt-5 px-4 text-3xl md:text-5xl text-gray-800 font-semibold">
            12 Key Factors for a Successful Startup in 2025
          </h1>

          {/* AUTHOR and DATE */}
          <div className="mx-6 text-gray-700 text-sm">
            <span>Piyush Yadav - </span>
            <span> 03 Jan 2025</span>
          </div>

          <div className="flex justify-center">
            <img
              src="featured1.jpg"
              alt=""
              className="p-3 md:w-1/2 flex justify-center items-center rounded-2xl"
            />
          </div>

          {/* CONTENT */}
          <div className="pl-3 text-lg tab:text-lg flex flex-col gap-3">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit
              beatae corporis aliquid, fugiat iste temporibus officia eos
              eligendi cum provident dolorum natus at similique sed deleniti
              sapiente tempore architecto! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rerum ea non unde sed impedit
              corporis quasi, provident veritatis dolores possimus temporibus
              quibusdam quod accusantium harum sunt vitae, qui eligendi iure?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur repudiandae dolore, modi veniam mollitia fugit, sint,
              illo quibusdam vero perferendis rerum laboriosam laborum at
              placeat excepturi fuga ipsa? Ad, ducimus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur repudiandae dolore, modi veniam mollitia fugit, sint,
              illo quibusdam vero perferendis rerum laboriosam laborum at
              placeat excepturi fuga ipemporibus officia eos eligendi cum
              provident dolorum natus at similique sed deleniti sapiente tempore
              architecto! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rerum ea non unde sed impedit corporis quasi, provident
              veritatis dolores possimus temporibus quibusdam quod accusantium
              harum sunt vitae, qui eligendi iure?sa? Ad, ducimus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur repudiandae dolore, modi veniam mollitia fugit, sint,
              illo quibusdam vero perferendis rerum laboriosam laborum at
              placeat excepturi fuga ipemporibus officia eos eligendi cum
              provident dolorum natus at similique sed deleniti sapiente tempore
              architecto! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rerum ea non unde sed impedit corporis quasi, provident
              veritatis dolores possimus temporibus quibusdam quod accusantium
              harum sunt vitae, qui eligendi iure?sa? Ad, ducimus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur repudiandae dolore, modi veniam mollitia fugit, sint,
              illo quibusdam vero perferendis rerum laboriosam laborum at
              placeat excepturi fuga ipemporibus officia eos eligendi cum
              provident dolorum natus at similique sed deleniti sapiente tempore
              architecto! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rerum ea non unde sed impedit corporis quasi, provident
              veritatis dolores possimus temporibus quibusdam quod accusantium
              harum sunt vitae, qui eligendi iure?sa? Ad, ducimus!
            </p>
          </div>
        </div>

        {/*RIGHT SIDEBAR MENU */}
        <div className="hidden md:block w-1/5 ml-6 tab:pl-12 h-full sticky top-16 tab:border-l-2 ">
          {/* USER IMAGE AND NAME */}
          <h1 className="mt-4 mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-3 mb-2 px-2">
            <div className="flex items-center gap-2">
              <img
                src="userImg.jpg"
                alt=""
                className="rounded-full object-cover w-8 h-8"
              />
              <Link>Piyush Yadav</Link>
            </div>
          </div>

          {/* FACEBOOK AND INSTA */}
          <div className="flex mb-6 pl-2.5 gap-2">
            <Link>
              <img src="facebook.svg" alt="" />
            </Link>
            <Link>
              <img src="instagram.svg" alt="" />
            </Link>
          </div>

          {/* SAVE AND DELETE ICONS */}
          <PostMenuActions />

          {/* CATEGORIES OPTIONS */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm mb-6 px-4">
            <Link className="underline" to="/posts?cat=All Posts">All</Link>
            <Link className="underline" to="/posts?cat=Web Dev">Web Dev</Link>
            <Link className="underline" to="/posts?cat=Technology">Technology</Link>
            <Link className="underline" to="/posts?cat=Finance">Finance</Link>
            <Link className="underline" to="/posts?cat=Fitness">Fitness</Link>
          </div>
        </div>
      </div>

      {/* COMMENTS SECTION */}
      <Comments />
    </div>
  );
};

export default SinglePostPage;
