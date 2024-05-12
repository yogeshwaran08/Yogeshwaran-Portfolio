import React from "react";
import "./WorkCard.css";
import { motion } from "framer-motion";

interface IWorkCard {
  title: string;
  content: string;
  duration: string;
  link?: string;
  tech: string;
}

const WorkCard: React.FC<IWorkCard> = ({
  title,
  content,
  link,
  duration,
  tech,
}) => {
  return (
    <motion.div
      className="work-card-container"
      initial={{ scale: 0.92 }}
      whileInView={{ scale: 1, transition: { duration: 0.5 } }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="glass" />
      <div className="frost" />
      <div className="work-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Duration: {duration}</p>
        <p>Technology stack: {tech}</p>
      </div>
      {link ? (
        <motion.a
          className="visit-overlay"
          whileHover={{ opacity: 1 }}
          href={link}
          target="_blank"
        >
          <h3>Visit</h3>
        </motion.a>
      ) : (
        <motion.a
          className="visit-overlay forbidden-overlay"
          whileHover={{ opacity: 1 }}
          href="mailto:yogeshwaran08083@gmail.com"
          target="_blank"
        >
          Source code forbidden.
          <h2>Click Here</h2>
          to Contact me for more details
        </motion.a>
      )}
    </motion.div>
  );
};

export default WorkCard;
