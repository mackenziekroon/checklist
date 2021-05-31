import React from "react";
import { AccountCircle } from "@material-ui/icons";

const Navbar = (props) => {
  return (
    <div className="nav-bar">
      <div className="account-icon">
        <AccountCircle style={{ color: "white", fontSize: "40px" }} />
      </div>
    </div>
  );
};

export default Navbar;
