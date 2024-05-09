import Graduation from "../../assets/animation/graduation.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

const Card = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="glass"></div>
      <div className="frost"></div>
      <div className="vertical-content">
        <Lottie
          animationData={Graduation}
          loop={true}
          className="grid-1-animation"
        />
        <div>
          <h3>College Education</h3>
          <p>
            I pursued my Bachelor of Science in Computer Science at Bharath
            University, where I attained a remarkable CGPA of 9 out of 10. This
            achievement reflects my dedication and commitment to academic
            excellence.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
