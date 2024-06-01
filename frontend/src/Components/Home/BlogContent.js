import "./CSS/BlogContent.css";
import PropTypes from "prop-types";

import pic from '../Images/gama.png'

const BlogContent = ({ className = "" }) => {
  return (
    <section className={`blog-content ${className}`}>
      <div className="blog-header">
        <div className="background1" />
        <div className="blog-header-inner">
          <div className="frame-parent">
            <div className="featured-post-parent">
              <div className="featured-post">Featured Post</div>
              <div className="frame-group">
                <div className="step-by-step-guide-to-choosing-parent">
                  <h1 className="step-by-step-guide-to">
                    Step-by-step guide to choosing great font pairs
                  </h1>
                  <div className="by-john-doe-container">
                    <span>{`By `}</span>
                    <span className="john-doe">John Doe</span>
                    <span className="l">{`   l   May 23, 2022 `}</span>
                  </div>
                </div>
                <p className="duis-aute-irure">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div className="button-wrapper">
              <button className="button1">
                <b className="read-more">{`Read More >`}</b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="httpswwwpexelscomphotom-icon"
          loading="lazy"
          alt=""
          src={pic}
        />
      </div>
    </section>
  );
};

BlogContent.propTypes = {
  className: PropTypes.string,
};

export default BlogContent;