import NavBar from "../../Components/navbar/navbar";
import "./Hero.css";
import Earth from "../../Components/Earth";
import ParticlesComponent from "../../Components/Background/Particle";
import HeroText from "../../Components/HeroText";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

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
    </div>
  );
}

export default Hero;
