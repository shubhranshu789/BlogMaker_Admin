import Navbar from "./Navbar";
import BlogContent from "./BlogContent";
import BlogPostsGrid from "./BlogPostsGrid";
import FrameComponent from "./FrameComponent";
import InputProcessor from "./InputProcessor";
import FooterIcons from "./FooterIcons";
import "./CSS/Blog.css";
import './CSS/global.css'
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  return (
    <div className="blog">
      <Navbar />
      <BlogContent />
      <section className="blog-posts-grid-wrapper">
        <BlogPostsGrid />
      </section>
      <FrameComponent />
      <InputProcessor />
      <FooterIcons />
    </div>
  );
};

export default Blog;