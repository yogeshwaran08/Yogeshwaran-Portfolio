import Lottie from "lottie-react";
import SchoolAnimation from "../../assets/animation/school-animation.json";
import Graduation from "../../assets/animation/graduation.json";
import Illustrator from "../../assets/animation/illustrator.json";
import Figma from "../../assets/animation/figma.json";
import UIUX from "../../assets/animation/UIUX_design.json";
import WebDesigning from "../../assets/animation/Web designing.json";
import MobileDesign from "../../assets/animation/Mobile_design.json";
import Innovative from "../../assets/animation/Innovative.json";
import "./body.css";
import jupyter from "../../assets/imgs/jupyter.png";
import astronut from "../../assets/imgs/astronut.png";
import saturn from "../../assets/imgs/saturn.png";
import mars from "../../assets/imgs/mars.png";
import astroid1 from "../../assets/imgs/astroid-type-1.png";
import astroid2 from "../../assets/imgs/astroid-type-2.png";
import rocket from "../../assets/imgs/rocket.png";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <div className="body-container">
      <motion.div
        className="card card-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="vertical-content">
          <Lottie
            animationData={SchoolAnimation}
            loop={true}
            className="grid-1-animation"
          />
          <div>
            <h3>School education</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-2"
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="horizontal-content">
          <Lottie
            animationData={Illustrator}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Adobe Illustrator</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="horizontal-content">
          <Lottie
            animationData={Figma}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Figma</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="horizontal-content">
          <Lottie
            animationData={UIUX}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Design Principals</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="vertical-content">
          <Lottie
            animationData={WebDesigning}
            loop={true}
            className="grid-1-animation"
          />
          <div>
            <h3>Web designing</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-7"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="vertical-content">
          <Lottie
            animationData={MobileDesign}
            loop={true}
            className="grid-1-animation"
          />
          <div>
            <h3>Mobile Design</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="horizontal-content">
          <Lottie
            animationData={Innovative}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Innovative thinker</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </motion.div>
      <div className="floating-img right-slanding-img astronut-position">
        <motion.img
          src={astronut}
          alt="Astroid"
          className="astronut-img"
          initial={{ translateX: -100 }}
          whileInView={{ translateX: 0, transition: { duration: 2 } }}
          animate={{
            y: [-5, 5, -5],
            transition: { yoyo: true, duration: 3, repeat: Infinity },
          }}
        />
      </div>

      <div className="floating-img rocket-slanding-img rocket-position">
        <motion.img
          src={rocket}
          alt="Rcoket"
          className="rocket-img"
          initial={{ translateX: 10, translateY: 200 }}
          whileInView={{
            translateX: 0,
            translateY: 0,
            transition: { duration: 1.5 },
          }}
          animate={{
            y: [-5, 5, -5],
            transition: { yoyo: true, duration: 3, repeat: Infinity },
          }}
        />
      </div>

      <div className="floating-img right-slanding-img astroid-sub1-position">
        <motion.img
          src={astroid1}
          alt="Astroid"
          className="astroid-sub1-img"
          animate={{
            y: [-5, 5, -5],
            x: [-5, 5, -5],
            transition: { yoyo: true, duration: 3, repeat: Infinity },
          }}
        />
      </div>

      <div className="floating-img left-slanding-img jupyter-position">
        <motion.img
          src={jupyter}
          alt="Astroid"
          className="jupyter-img"
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0, transition: { duration: 2 } }}
          animate={{
            y: [-5, 5, -5],
            transition: { yoyo: true, duration: 3, repeat: Infinity },
          }}
        />
      </div>

      <div className="floating-img right-slanding-img saturn-position">
        <motion.img
          src={saturn}
          alt="Saturn"
          className="saturn-img"
          initial={{ translateX: -100 }}
          whileInView={{ translateX: 0, transition: { duration: 2 } }}
          animate={{
            y: [-5, 5, -5],
            transition: { yoyo: true, duration: 3, repeat: Infinity },
          }}
        />
      </div>

      <div className="floating-img left-slanding-img mars-position">
        <motion.img
          src={mars}
          alt="Mars"
          className="mars-img"
          initial={{ translateX: 50 }}
          whileInView={{ translateX: 0, transition: { duration: 2 } }}
          animate={{
            y: [-5, 5, -5],
            transition: { yoyo: true, duration: 3, repeat: Infinity },
          }}
        />
      </div>

      <div className="floating-img left-slanding-img astroid1-position">
        <motion.img
          src={astroid1}
          alt="Astroid"
          className="astroid1-img"
          initial={{ translateX: -70 }}
          whileInView={{ translateX: 0, transition: { duration: 2 } }}
          animate={{
            y: [-5, 5, -5],
            transition: { yoyo: true, duration: 3, repeat: Infinity },
          }}
        />
      </div>

      <div className="floating-img left-slanding-img astroid2-position">
        <motion.img
          src={astroid2}
          alt="Astroid"
          className="astroid2-img"
          initial={{ translateY: 70 }}
          whileInView={{ translateY: 0, transition: { duration: 2 } }}
          animate={{
            y: [-5, 5, -5],
            transition: { yoyo: true, duration: 3, repeat: Infinity },
          }}
        />
      </div>
    </div>
  );
};

export default Body;
