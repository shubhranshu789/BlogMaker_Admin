import Item from "./Item";
import PropTypes from "prop-types";
import "./CSS/FrameComponent.css";
import { Link } from "react-router-dom";

import building from '../Images/pngs/building.png'
import other from '../Images/pngs/other.png'
import rocket from '../Images/pngs/rocket.png'
import techbrain from '../Images/pngs/techbrain.png'

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`categories-wrapper ${className}`}>
      <div className="categories">
        <div className="all-categories-wrapper">
          <h1 className="all-categories">All Categories</h1>
        </div>
        <div className="item-parent">
          <Link to={"./technicalblogs"} style={{ textDecoration: "none" }}>
            <div className="FrameCardBox" style={{ backgroundColor: "" }}>
              <Item
                icon={techbrain}
                business="Technical"
                cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
            </div>
          </Link>

          <Link to={"./economyblog"} style={{ textDecoration: "none" }}>
            <div className="FrameCardBox" style={{ backgroundColor: "" }}>
              <Item
                icon={building}
                business="Economic"
                cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
            </div>
          </Link>

          <Link to={"/financilabolgs"} style={{ textDecoration: "none" }}>
            <div className="FrameCardBox" style={{ backgroundColor: "" }}>
              <Item
                icon={rocket}
                business="Financial"
                cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
            </div>
          </Link>

          <Link to={"/othersblogs"} style={{ textDecoration: "none" }}>
            <div className="FrameCardBox" style={{ backgroundColor: "" }}>
              <Item
                icon={other}
                business="Others"
                cardText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
