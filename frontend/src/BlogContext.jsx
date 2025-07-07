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
      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      const data = await response.json();
      console.log("Blog saved", data);
    } catch (error) {
      console.error("Error saving blog", error);
    }
  };

  //   fetching blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blogs");
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
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  return useContext(BlogContext);
};
