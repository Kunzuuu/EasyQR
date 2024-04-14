import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <div style={{ width: "100%", position: "absolute" }}>
      <Box display="flex" p={4} alignItems="center">
        <Box p={1} flexGrow={1}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <img
              src="https://i.imgur.com/WEINNBb.png"
              alt="logo"
              style={{ width: 125 }}
            />
          </Link>
        </Box>
        <Box p={1}>
          <NavbarMenu />
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;