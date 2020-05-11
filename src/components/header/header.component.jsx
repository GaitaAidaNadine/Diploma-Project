import React from "react";
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
import logo from "../../assets/logo-mic3.png";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        style={{ width: "130px", height: "100px", marginLeft: "80px" }}
      />
    </Link>
    <div className="options">
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      }
      <Link className="option" to="/">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
