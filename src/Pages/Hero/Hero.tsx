import NavBar from "../../Components/navbar/navbar";
import "./Hero.css";
import Earth from "../../Components/Earth";
import ParticlesComponent from "../../Components/Background/Particle";
import HeroText from "../../Components/HeroText";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Moon from "../../assets/imgs/moon.png";

function Hero() {
  return (
    <div className="hero-container">
      <div id="particle">
        <ParticlesComponent />
      </div>
      <NavBar />
      <ParallaxProvider>
        <Parallax speed={10}>
          <div id="earth">
            <Earth />
          </div>
        </Parallax>
      </ParallaxProvider>

      <div id="heroTextDiv">
        <HeroText />
      </div>

      <motion.img
        src={Moon}
        alt="Moon Image"
        className="floating-img moon"
        animate={{
          y: [-5, 5, -5],
          transition: { yoyo: true, duration: 3, repeat: Infinity },
        }}
      />
    </div>
  );
}

export default Hero;
