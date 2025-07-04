import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Web Dev");
  const [date, setDate] = useState(Date().toString().slice(4, 15));

  const createBlog = async()=> {
    try {
        const response = await fetch('http://localhost:5000/api/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, content, category})
        })
        const data = await response.json();
        console.log("Blog saved", data)
    } catch(error) {
        console.error("Error saving blog", error)
    }
  }
  

  return (
    <BlogContext.Provider
      value={{
        title,
        content,
        category,
        date,
        setTitle,
        setContent,
        setCategory,
        setDate,
        createBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};
