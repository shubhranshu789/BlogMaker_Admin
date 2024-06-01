import "./CSS/FooterIcons.css";
import PropTypes from "prop-types";

import { Link , useNavigate } from "react-router-dom";
import facebook from '../Images/facebook.png'
import insta from '../Images/instagram.png'
import linkedin from '../Images/linkedIn.png'



const FooterIcons = ({ className = "" }) => {

  const navigate = useNavigate();

  return (
    <section className={`footer-icons ${className}`} data-scroll-to="footerIcons">
      <div className="icons">
        <img
          className="phinstagram-logo-fill-icon"
          alt=""
          src={facebook}
        />
        <img className="bilinkedin-icon" alt="" src={linkedin} />
        <img
          className="bienvelope-fill-icon"
          alt=""
          src={insta}
        />
      </div>
      <div className="copyright">
        <div className="madelyn-torff-2021">{`Dark Shubh 2021 `}</div>
      </div>


      <div className="logoutBtn">
          <h4 style={{fontSize : "25px" , cursor : "pointer", color:"red" , fontWeight : "bold"}} 
            onClick={() => {
              // setModalOpen(false);
              localStorage.clear()
              navigate("./signin")
          }}
          >LogOut</h4>
        </div>
    </section>
  );
};

FooterIcons.propTypes = {
  className: PropTypes.string,
};

export default FooterIcons;