import { useEffect, useState } from "react";
import { useBlogs } from "../../BlogContext";

const Search = () => {
  const {setFilteredBlogs, blogs} = useBlogs();
  const [search, setSearch] = useState("");

  // SEARCH LOGIC
  useEffect(() => {
    const filtered = blogs.filter((blog)=> {
      const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase())

      return matchSearch;
    })
    setFilteredBlogs(filtered);
  }, [search, blogs])

  return (
    // className="flex items-center gap-2 p-2 rounded-full bg-gray-100"
    <div className="flex item-center gap-2 md:w-full h-10 m-3 md:m-0 p-3 rounded-full bg-gray-200 outline-none">
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

      <input
        type="text"
        placeholder="Search a post"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="focus:outline-none bg-transparent w-full "
      />
    </div>
  );
};

export default Search;
