import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const { user } = useUser();
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Web Dev");
  const [blogs, setBlogs] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const createBlog = async () => {
    if (!user) return;
    
    const blogData = {
      title,
      content,
      category,
      imgUrl,
      author: {
        name: user.fullName,
        userId: user.id,
        profilePhoto: user.imageUrl,
      },
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/api/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      const data = await response.json();
    } catch (error) {
      console.error("Error saving blog", error);
    }
  };

  //   fetching blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/api/blogs`);
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error in fetching blogs", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        title,
        content,
        category,
        blogs,
        imgUrl,
        setTitle,
        setContent,
        setCategory,
        createBlog,
        setBlogs,
        setImgUrl,
        fetchBlogs,
        filteredBlogs,
        setFilteredBlogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  return useContext(BlogContext);
};
