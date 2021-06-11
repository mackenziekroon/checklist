import React from "react";
import PropTypes from "prop-types";
import { logout } from "../store";
import { AccountCircle } from "@material-ui/icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => {
  return (
    <div className="nav-bar">
      <Link to="/">
        {/* Logout */}
        <div href="logout" onClick={handleClick} className="account-icon">
          <AccountCircle style={{ color: "white", fontSize: "40px" }} />
        </div>
      </Link>
    </div>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
