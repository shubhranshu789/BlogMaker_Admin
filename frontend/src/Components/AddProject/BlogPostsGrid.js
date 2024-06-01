// import BlogPostItems1 from "./BlogPostItems1";
import BlogPostItems1 from "../Home/BlogPostItems1";
// import BlogPostItems from "./BlogPostItems";
import BlogPostItems from "../Home/BlogPostItems";
import PropTypes from "prop-types";
// import "./CSS/BlogPostsGrid.css";
import "../Home/CSS/BlogPostsGrid.css";


import pic1 from "../Images/gama.png";
import pic2 from "../Images/alpha.png";
import pic3 from "../Images/beta.png";

import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";

const BlogPostsGrid = ({ className = "" }) => {
  const [pic, setPic] = useState([]);
  const notifyB = (msg) => toast.success(msg);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/allEconomies", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPic(result);
        // setPosts(result)
        console.log(pic);
      });
  }, []);

  const chk = () => {
    console.log(pic);
  };

  const removePost = (Id) => {
    fetch(`/deleteEconomy/${Id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        notifyB(result.message);
      });
  };

  return (
    <div
      className={`blog-posts-grid ${className}`}
      data-scroll-to="blogPostsGrid"
    >
      <div className="all-posts-footer">
        <h1 className="all-posts">All Economy Blogs</h1>
        <div className="all-blogs-divider" />
      </div>

      {pic.map((blogs) => {
        return [
          <>
            
              <BlogPostItems1
              httpswwwpexelscomphototwo={blogs.pic}
              startup={blogs.title}
              designTipsForDesignersTha={blogs.about}
              BlogContent = {blogs.desc}

              buttonLink={blogs.link}
              buttonText="View More"
              buttonTextDelete = "Delete"

              id={blogs._id}
              // key={blogs._id}
              removePost={removePost}
            />

           
            

            
          </>,
        ];
      })}
    </div>
  );
};

BlogPostsGrid.propTypes = {
  className: PropTypes.string,
};

export default BlogPostsGrid;
