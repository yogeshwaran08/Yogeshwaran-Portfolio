import { motion } from "framer-motion";
import "./Footer.css";
import InstagramIcon from "../../assets/icons/instagram";
import TwitterIcon from "../../assets/icons/Twitter";
import LinkedinIcon from "../../assets/icons/linkedin";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="main-content">
        <motion.h2
          className="connect-text"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 2 }}
        >
          Let's Get connected
        </motion.h2>
        <motion.div
          className="hr"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.1, duration: 1 },
          }}
        ></motion.div>
        <motion.div
          className="hire-btn"
          whileHover={{ scale: 1.1, backgroundColor: "#1c1a1a" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.1, duration: 2 },
          }}
        >
          <h5>Hire Me !</h5>
        </motion.div>
      </div>
      <div className="socials">
        <InstagramIcon height={"20px"} />
        <TwitterIcon height={"20px"} />
        <LinkedinIcon height={"20px"} />
      </div>
    </div>
  );
};

export default Footer;
