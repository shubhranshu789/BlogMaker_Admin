import { useMemo } from "react";
import "./CSS/BlogPostItems1.css";
import PropTypes from "prop-types";

const BlogPostItems1 = ({
  className = "",
  httpswwwpexelscomphototwo,
  startup,
  designTipsForDesignersTha,
  propPadding,
  propTextDecoration,
  buttonText,
  BlogContent,
  buttonLink, 
  buttonTextDelete,
  removePost, 
  id 
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const startupStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const handleDelete = () => {
    removePost(id); // Call removePost with the blog id
  };

  return (
    <div className={`blog-post-items ${className}`}>
      <img style={{width :"35%"}}
        className="httpswwwpexelscomphotot-icon"
        loading="lazy"
        alt=""
        src={httpswwwpexelscomphototwo}
      />
      <div className="blog-post-items-inner" style={frameDivStyle}>
        <div className="startup-parent">
          <b className="startup" style={startupStyle}>
            {startup}
          </b>
          <h1 className="design-tips-for">{designTipsForDesignersTha}</h1>
          <p className="duis-aute-irure1">
           {BlogContent}
          </p>

          <div className="blogBtns">
            <a href={buttonLink}>
              <button className="custom-button">
                {buttonText}
              </button>
            </a>
            <button className="custom-button delete-button" onClick={handleDelete}>
              {buttonTextDelete}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

BlogPostItems1.propTypes = {
  className: PropTypes.string,
  httpswwwpexelscomphototwo: PropTypes.string,
  startup: PropTypes.string,
  designTipsForDesignersTha: PropTypes.string,
  buttonText: PropTypes.string,
  BlogContent: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonTextDelete: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default BlogPostItems1;