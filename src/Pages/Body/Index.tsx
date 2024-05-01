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
      <div className="card card-1">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="card card-2">
        <div className="glass"></div>
        <div className="frost"></div>
      </div>

      <div className="card card-3">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="card card-4">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="card card-5">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="card card-6">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="card card-7">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="card card-8">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="card card-9">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="card card-10">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="card card-11">
        <div className="glass"></div>
        <div className="frost"></div>
        <div className="content">{/* Content of the card */}</div>
      </div>

      <div className="floating-img right-slanding-img astronut-position">
        <motion.img
          src={astronut}
          alt="Astroid"
          className="astronut-img"
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
