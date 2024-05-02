import { motion } from "framer-motion";
import "./Footer.css";
import InstagramIcon from "../../assets/icons/instagram";
import TwitterIcon from "../../assets/icons/Twitter";
import LinkedinIcon from "../../assets/icons/linkedin";
import EmailIcon from "../../assets/icons/Email";

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
        <motion.a
          href="https://survey.qwary.com/form/S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIDLyvUyVtmEo="
          target="_blank"
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
        </motion.a>
      </div>
      <div className="socials">
        <a href="https://instagram.com/lydia_rvs" target="_blank">
          <InstagramIcon height={"20px"} width={"20px"} />
        </a>
        <a href="https://twitter.com" target="_blank">
          <TwitterIcon height={"20px"} width={"20px"} />
        </a>
        <a href="https://linkedin.com/in/lydia-v" target="_blank">
          <LinkedinIcon height={"20px"} width={"20px"} />
        </a>
        <a href="mailto:lydiarvs12@gmail.com" target="_blank">
          <EmailIcon height={"20px"} width={"20px"} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
