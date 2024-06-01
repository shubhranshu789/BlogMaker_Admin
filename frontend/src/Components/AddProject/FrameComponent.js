import Item from "../Home/Item";
import PropTypes from "prop-types";
import "./CSS/FrameComponent.css";
import { Link } from "react-router-dom";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`categories-wrapper ${className}`}>
      <div className="categories">
        <div className="all-categories-wrapper">
          <h1 className="all-categories">All Categories</h1>
        </div>
        <div className="item-parent">

          <div className="FrameCardBox" style={{backgroundColor : ""}}>
            <Item icon="/icon.svg" business="Technical" cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
          </div>
          <Link to={'./economyblog'} style={{textDecoration : "none"}}>
            <div className="FrameCardBox" style={{backgroundColor : "#ffec3b"}}>
              <Item icon="/icon.svg" business="Economic" cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
            </div>
          </Link>
          <Link to={'/financilabolgs'} style={{textDecoration : "none"}}>
            <div className="FrameCardBox" style={{backgroundColor : ""}}>
              <Item icon="/icon.svg" business="Financial" cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
            </div>
          </Link>
          <div className="FrameCardBox" style={{backgroundColor : ""}}>
            <Item icon="/icon.svg" business="Test" cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
          </div>



          {/* <div className="item-hover">
            <div className="background3" />
            <img className="item-hover-child" />
            <div className="startup-group">
              <h2 className="startup1">Startup</h2>
              <p className="lorem-ipsum-dolor1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </div> */}

          {/* <Item icon="/icon-2.svg" business="Economy" propMinWidth="118px" /> */}
          {/* <div className="item1">
            <div className="background4" />
            <img
              className="business-and-trade-1-icon"
              loading="lazy"
              alt=""
              src="/businessandtrade-1.svg"
            />
            <div className="technology-group">
              <b className="technology1">Technology</b>
              <p className="lorem-ipsum-dolor2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;