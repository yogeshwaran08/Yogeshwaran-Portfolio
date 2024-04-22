import React from "react";
import "./navbar.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
//e518ec920eb7b39f5891e8c6c61d71a7

function NavBar() {
  return (
    <div className="navbar-container">
      <h1 className="navbar-branding">Lydia</h1>
      <motion.button
        type="button"
        id="invite-button"
        whileHover={{ scale: 1.07 }}
      >
        <Marquee speed={40}>Let's work Together</Marquee>
      </motion.button>
    </div>
  );
}

export default NavBar;
