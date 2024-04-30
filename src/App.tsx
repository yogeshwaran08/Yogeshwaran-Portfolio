import ParticlesComponent from "./Components/Background/Particle";
import Body from "./Pages/Body/Index";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero/Hero";

function App() {
  return (
    <div>
      {/* <ParticlesComponent id="particles" /> */}
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
