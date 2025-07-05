import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Web Dev");
  const [date, setDate] = useState(Date().toString().slice(4, 15));
  const [blogs, setBlogs] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const createBlog = async()=> {
    try {
        const response = await fetch('http://localhost:5000/api/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, content, category, imageUrl})
        })
        const data = await response.json();
        console.log("Blog saved", data)
    } catch(error) {
        console.error("Error saving blog", error)
    }
  }

//   fetching blogs
const fetchBlogs = async() => {
    try{
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();
        console.log(data)
        setBlogs(data);
    }catch(error) {
        console.error("Error in fetching blogs", error);
    }
}
useEffect(()=> {
        fetchBlogs();
    }, [])
  

  return (
    <BlogContext.Provider
      value={{
        title,
        content,
        category,
        date,
        blogs,
        imageUrl,
        setTitle,
        setContent,
        setCategory,
        setDate,
        createBlog,
        setBlogs,
        setImageUrl,
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
