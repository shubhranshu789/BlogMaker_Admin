import { useMemo } from "react";
import "./CSS/Item.css";
import PropTypes from "prop-types";

const Item = ({ className = "", icon, business, propMinWidth , cardText }) => {
  const businessStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`item ${className}`}>
      <div className="background2" />
      <img className="icon" loading="lazy" alt="" src={icon} />
      <div className="business-parent">
        <h2 className="business" style={businessStyle}>
          {business}
        </h2>
        <p className="lorem-ipsum-dolor">
          {cardText}
        </p>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  business: PropTypes.string,
  cardText: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Item;