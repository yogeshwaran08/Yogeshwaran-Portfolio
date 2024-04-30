import "./body.css";
import jupyter from "../../assets/imgs/jupyter.png";
import astronut from "../../assets/imgs/astronut.png";
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
        <div className="floating-img slanding-img jupyter-position">
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

      <div className="floating-img slanding-img astronut-position">
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
    </div>
  );
};

export default Body;
