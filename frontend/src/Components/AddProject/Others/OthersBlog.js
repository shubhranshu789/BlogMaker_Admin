import React from "react";

import Navbar from "../../Home/Navbar";

import BlogContent from "../../Home/BlogContent";
import BlogPostsGrid from "./BlogPostsGrid";
// import FrameComponent from "./FrameComponent";
import InputProcessor from "../../Home/InputProcessor";
import FooterIcons from "../../Home/FooterIcons";
import "../../Home/CSS/Blog.css";
import "../../Home/CSS/global.css";

function OthersBlog() {
  return (
    <div>
      <Navbar />
      <BlogContent />
      <section className="blog-posts-grid-wrapper">
        <BlogPostsGrid />
      </section>
      {/* <FrameComponent /> */}
      <InputProcessor />
      <FooterIcons />
    </div>
  );
}

export default OthersBlog;
