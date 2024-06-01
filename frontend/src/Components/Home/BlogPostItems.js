import "./CSS/BlogPostItems.css";
import PropTypes from "prop-types";

const BlogPostItems = ({
  className = "",
  httpswwwpexelscomphotopho,
  tECHNOLOGY,
  figmaDesignSystemsYouCanD,
  BlogContent,
}) => {
  return (
    <div className={`blog-post-items1 ${className}`}>
      <div className="httpswwwpexelscomphotop-parent">
        <img
          className="httpswwwpexelscomphotop-icon"
          loading="lazy"
          alt=""
          src={httpswwwpexelscomphotopho}
        />
        <div className="frame-wrapper">
          <div className="technology-parent">
            <b className="technology">{tECHNOLOGY}</b>
            <h1 className="figma-design-systems">
              {figmaDesignSystemsYouCanD}
            </h1>
            <p className="duis-aute-irure2">
              {BlogContent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostItems.propTypes = {
  className: PropTypes.string,
  httpswwwpexelscomphotopho: PropTypes.string,
  tECHNOLOGY: PropTypes.string,
  figmaDesignSystemsYouCanD: PropTypes.string,
  BlogContent: PropTypes.string,
};

export default BlogPostItems;