import Navbar from "./components/home/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Write from "./pages/Write";
import Register from "./pages/Register.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import EditBlog from "./pages/EditBlog.jsx";

function App() {
  return (
    <div className="2xl:px-64">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/post/:id" element={<SinglePostPage />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </div>
  );
}

export default App;
