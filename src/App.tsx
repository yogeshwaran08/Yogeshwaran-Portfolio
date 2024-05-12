import { useEffect } from "react";
import Body from "./Pages/Body/Index";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero/Hero";
import Work from "./Pages/Works/Index";

function App() {
  useEffect(() => {
    const handleReadyStateChange = () => {
      if (document.readyState === "complete") {
        console.log("complete");
      }
    };

    document.addEventListener("readystatechange", handleReadyStateChange);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      document.removeEventListener("readystatechange", handleReadyStateChange);
    };
  }, []);

  return (
    <div>
      {/* <ParticlesComponent id="particles" /> */}
      <Hero />
      <Body />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
