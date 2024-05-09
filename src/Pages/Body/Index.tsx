import Lottie from "lottie-react";
import SchoolAnimation from "../../assets/animation/school-animation.json";
import Graduation from "../../assets/animation/graduation.json";
import Hello from "../../assets/animation/hello.json";
import Bulb from "../../assets/animation/bulb.json";
import AppDev from "../../assets/animation/Appdev.json";
import ReactAnim from "../../assets/animation/react.json";
import Python from "../../assets/animation/python.json";
import WebDev from "../../assets/animation/WebDev.json";
import Firebase from "../../assets/animation/firebase.json";
import javascript from "../../assets/animation/javascript.json";
import hacker from "../../assets/animation/hacker.json";
import html from "../../assets/animation/html.json";
import Css from "../../assets/animation/css.json";
import MongoDB from "../../assets/animation/monogo.json";
import tensorflow from "../../assets/animation/tensorflow.json";
import Figma from "../../assets/animation/figma.json";
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
              I studied my school education at Sri VDS Jain Higher Secondary
              School, where I dedicated myself to academic excellence. Upon
              completing my higher secondary education, I achieved a commendable
              score of 89.16%.
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
              I pursued my Bachelor of Science in Computer Science at Bharath
              University, where I attained a remarkable CGPA of 9 out of 10.
              This achievement reflects my dedication and commitment to academic
              excellence.
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
            animationData={Hello}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>About me</h3>
            <p>
              I excel in utilizing Adobe Illustrator, demonstrating a
              comprehensive understanding of its functionalities and tools.
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
            animationData={Bulb}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Idealogy</h3>
            <p>
              I am proficient in utilizing Figma, demonstrating a solid
              understanding of its interface and collaborative features.
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
            animationData={AppDev}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>App Developer</h3>
            <p>
              I understand design principles well, enabling me to create
              visually striking and effective designs by incorporating balance,
              hierarchy, and contrast.
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
            animationData={ReactAnim}
            loop={true}
            className="grid-1-animation"
          />
          <div>
            <h3>React</h3>
            <p>
              I excel in web design, adeptly creating visually appealing and
              user-friendly websites with a focus on responsive design and UX/UI
              principles.
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
            animationData={Python}
            loop={true}
            className="grid-1-animation"
          />
          <div>
            <h3>Mobile Design</h3>
            <p>
              I specialize in mobile design, creating intuitive and visually
              appealing user interfaces for iOS and Android platforms.
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
            animationData={WebDev}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Innovative thinker</h3>
            <p>
              I am an innovative thinker, consistently generating creative
              solutions and pushing boundaries to achieve unique and impactful
              results.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="vertical-content">
          <Lottie
            animationData={hacker}
            loop={true}
            className="grid-1-animation"
          />
          <div>
            <h3>Card 9</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="horizontal-content">
          <Lottie
            animationData={html}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Card 10</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-11"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="horizontal-content">
          <Lottie
            animationData={Css}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Card 11</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="vertical-content">
          <Lottie
            animationData={javascript}
            loop={true}
            className="grid-1-animation"
          />
          <div>
            <h3>Card 12</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-13"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="horizontal-content">
          <Lottie
            animationData={Firebase}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Car 13</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="vertical-content">
          <Lottie
            animationData={tensorflow}
            loop={true}
            className="grid-1-animation"
          />
          <div>
            <h3>Car 14</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="horizontal-content">
          <Lottie
            animationData={MongoDB}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Card 15</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-16"
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
            <h3>Card 16</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card card-17"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="horizontal-content">
          <Lottie
            animationData={MongoDB}
            loop={true}
            className="grid-3-animation"
          />
          <div>
            <h3>Card 17</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
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
