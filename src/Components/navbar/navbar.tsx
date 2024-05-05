import "./navbar.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
//e518ec920eb7b39f5891e8c6c61d71a7

function NavBar() {
  return (
    <div className="navbar-container">
      <h1 className="navbar-branding">Lydia</h1>
      <div className="nav-btns">
        <motion.a
          id="download-resume-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          href="https://drive.google.com/file/d/1LOO1X-9ZPdH82E4OucgsENRTvijg3DjZ/view?usp=sharing"
          target="_blank"
        >
          Download resume
        </motion.a>
        <motion.a
          id="invite-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          href="https://survey.qwary.com/form/S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIDLyvUyVtmEo="
          target="_blank"
        >
          <Marquee speed={40}>Let's work Together</Marquee>
        </motion.a>
      </div>
    </div>
  );
}

export default NavBar;
