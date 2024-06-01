import "./CSS/Navbar.css";
import PropTypes from "prop-types";

import pic from "../Images/gama.png";
import { Link } from "react-router-dom";

import { useCallback } from "react";

const Navbar = ({ className = "" }) => {
  const onSobreText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerIcons']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTabDefault1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='blogPostsGrid']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={`navbar ${className}`}>
      <div className="background" />

      <Link to={"/"}>
        <div className="logo-wrapper">
          <img className="logo-icon" loading="lazy" alt="" src={pic} />
        </div>
      </Link>

      <div className="navbar-links">
        <div className="links">
          <nav className="links-list">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/addprojects"}
            >
              <a className="home">Add Project</a>
            </Link>
            {/* <Link style={{textDecoration : "none" ,color : "white"}}>
              <a className="home">Home</a>
            </Link> */}
            <div className="home-link">
              <a className="blog1" onClick={onTabDefault1Click}>
                Go to Blogs
              </a>
            </div>
            <div className="about-us-link">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/about"}
              >
                <a className="about-us">About Us</a>
              </Link>
            </div>
            <a className="contact-us" onClick={onSobreText2Click}>
              Contact us
            </a>
          </nav>
        </div>
        {/* <button className="button">
          <a className="subscribe">Subscribe</a>
        </button> */}
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
