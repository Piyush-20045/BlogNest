import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="sm:w-1/3 lg:w-1/4 sm:mr-6">
      <img src="featured2.jpg" alt="" className="rounded-lg" />

      {/* DETAILS */}
      <div className="bg-white px-3 pt-1 rounded-lg flex flex-col gap-2">
        {/* title */}
        <Link className="block text-gray-700 text-sm">Web Dev</Link>
        <Link to="/test" className="text-xl sm:text-2xl font-semibold text-gray-900 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        
        {/* Paragraph */}
        <p className="line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni natus laudantium dolorum cupiditate quas itaque, eligendi animi, voluptas, ducimus repudiandae qui numquam velit nostrum quis atque. Nostrum, dolores maiores.
        </p>
        <Link to="test" className="text-blue-800">Read more</Link>

        {/* name and category */}
        <div className="text-gray-700 text-sm">
          <span>Piyush Yadav - </span>
          <span> 03 JAN 2025</span>
        </div>

      </div>
    </div>
  );
};

export default PostListItem;
