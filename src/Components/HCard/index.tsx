import { motion } from "framer-motion";
import Lottie from "lottie-react";
import "./HCard.css";
import React from "react";

interface ICard {
  title: string;
  content: string;
  animation: unknown;
  className: string;
  animationWidth?: string;
}

const HCard: React.FC<ICard> = ({
  title,
  content,
  animation,
  className,
  animationWidth,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.92 }}
      whileInView={{ scale: 1, transition: { duration: 0.5 } }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`card ${className}`}
      exit={{ scale: 0.92 }}
    >
      <div className="glass" />
      <div className="frost" />
      <div className="card-content">
        <Lottie
          animationData={animation}
          loop={true}
          style={{
            width: animationWidth,
            paddingLeft: "20px",
            alignSelf: "center",
          }}
        />
        <div>
          <h3>{title}</h3>
          <p className="content">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HCard;
