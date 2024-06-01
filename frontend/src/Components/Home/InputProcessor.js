import './CSS/input.css'
import PropTypes from "prop-types";

const InputProcessor = ({ className = "" }) => {
  return (
    <section className={`input-processor ${className}`}>
      <div className="join-content">
        <div className="join-our-team-to-be-a-part-of-parent">
          <h1 className="join-our-team">
            Join our team to be a part of our story
          </h1>
          <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
            <p className="lorem-ipsum-dolor3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
        <div className="button-container">
          <button className="button2">
            <b className="read-more1">Join Now</b>
          </button>
        </div>
      </div>
    </section>
  );
};

InputProcessor.propTypes = {
  className: PropTypes.string,
};

export default InputProcessor;