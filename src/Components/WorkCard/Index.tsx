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
    >
      <div className="glass" />
      <div className="frost" />
      <div className="work-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Duration : {duration}</p>
        <p>Technology stack : {tech}</p>
      </div>
    </motion.div>
  );
};

export default WorkCard;
