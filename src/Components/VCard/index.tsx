import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import "./VCard.css";
import React from "react";

interface ICard {
  title: string;
  content: string;
  animation: unknown;
  className: string;
  animationWidth?: string;
}

const VCard: React.FC<ICard> = ({
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
      className={`Vcard ${className}`}
    >
      <div className="glass" />
      <div className="frost" />
      <div className="card-content">
        <Lottie
          animationData={animation}
          loop={true}
          className="animation"
          style={{ width: animationWidth }}
        />
        <div>
          <h3>{title}</h3>
          <p className="content">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default VCard;
