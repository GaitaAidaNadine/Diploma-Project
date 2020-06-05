import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";
import logo from "../../assets/logo-mic3.png";
import "./Header.scss";

const Header = ({ hidden, user }) => (
  <div className="header">
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        style={{ width: "130px", height: "100px", marginLeft: "80px" }}
      />
    </Link>
    <div className="links">
      {user ? (
        <div className="link" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="link" to="/signin">
          SIGN IN
        </Link>
      )}
      <Link className="link" to="/contact">
        CONTACT
      </Link>
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

//it will be called whenever the store state changes; state is our rootReducer
const mapStateToProps = (state) => {
  return {
    hidden: state.cart.hidden,
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(Header);
