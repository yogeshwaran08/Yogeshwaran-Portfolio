import "./body.css";
import HCard from "../../Components/HCard";
import VCard from "../../Components/VCard";
//animation
import Me from "../../assets/animation/hello.json";
import Bulb from "../../assets/animation/bulb.json";
import School from "../../assets/animation/school-animation.json";
import Graduation from "../../assets/animation/graduation.json";
import Python from "../../assets/animation/python.json";
import javascript from "../../assets/animation/javascript.json";
import tensorflow from "../../assets/animation/tensorflow.json";
import MongoDB from "../../assets/animation/monogo.json";
import AppDev from "../../assets/animation/Appdev.json";
import Figma from "../../assets/animation/figma.json";
import Hacker from "../../assets/animation/hacker.json";
import Firebase from "../../assets/animation/firebase.json";
import Css from "../../assets/animation/css.json";
import ReactAnim from "../../assets/animation/react.json";
import DSA from "../../assets/animation/data structure.json";
import Html from "../../assets/animation/html.json";
import UIUX from "../../assets/animation/UIUX_design.json";
import ReactNative from "../../assets/animation/react native.json";

const Body = () => {
  return (
    <div className="body-container">
      <VCard
        title="About me"
        content="Hello, I am yogeshwaran, tech enthusiast, I love programming
        my deep passion in exploring technology makes me to stay updated in emerging technology."
        className="card-1"
        animation={Me}
        animationWidth="80%"
      />
      <VCard
        title="My Motto"
        content="
            As a technology explorer, I love Programming and
            Penetrating a software. I am very concerned about
            user privacy in internet. ' Make a secure software '"
        className="card-2"
        animation={Bulb}
        animationWidth="30%"
      />
      <HCard
        title="School"
        content="
            I completed my schooing in Sri VDS Jain Higher 
            Secondary School, Tiruvannamalai, Tamil Nadu, India 
            and passed out with 89%"
        className="card-3"
        animation={School}
        animationWidth="100%"
      />
      <HCard
        title="College"
        content="
            I completed my BSC Computer Science Degree at 
            Bharath Institute of Higher Education and Research and
            passed out with 9.5 out of 10 CGPA"
        className="card-4"
        animation={Graduation}
      />
      <HCard
        title="Python"
        content="
            Python is my second language I learnt. From the
            time I learnt it become my favorite programming language.
            I developed many programs in python."
        className="card-5"
        animation={Python}
        animationWidth="90%"
      />
      <HCard
        title="Javascript"
        content="
            Following Python I learn Javascript and developer
            many websites using it. If I should rate my skill
            in javascript I will rate it as 8 out of 10."
        className="card-6"
        animation={javascript}
        animationWidth="100%"
      />
      <VCard
        title="Tensorflow"
        content="
            I am very interested in developing a deep learning model. I enjoy building a AI model
            That could predict. It feels like a Wizard🧙‍♂️
            "
        className="card-7"
        animation={tensorflow}
        animationWidth="40%"
      />
      <HCard
        title="Mongo DB"
        content="
            Confused with building tables in SQL? Here is NoSQL MongoDB. A very interesting 
            and Easy to use Database."
        className="card-8"
        animation={MongoDB}
        animationWidth="90%"
      />
      <HCard
        title="App developer"
        content="
          I am able to develop android and IOS apps using React native backend with firebase
          or a custom backend written with backend language like node.js or Python
          "
        className="card-9"
        animation={AppDev}
      />
      <HCard
        title="Figma"
        content="
            Designs Designs Designs. I don't like it. I avoid But designs like me
            I can't avoid. LOL. I do design Web and App"
        className="card-10"
        animation={Figma}
        animationWidth="100%"
      />
      <VCard
        title="Hacker"
        content="
            I love hacking softwares, I primarily focused on web 
            penetration testing, reverse engineering and privilege escalation. I have
            earned GOD title in tryhackme."
        className="card-11"
        animation={Hacker}
        animationWidth="50%"
      />
      <HCard
        title="Firebase"
        content="
            Google's Backend very easy to use, that could reduce so much of work
            in backend. I have made many projects using firebase."
        className="card-12"
        animation={Firebase}
      />
      <HCard
        title="CSS"
        content="
              This makes website more styled and attractive. The world without 
              Css will be ugly. I am a expert in Css"
        className="card-14"
        animation={Css}
      />
      <HCard
        title="HTML"
        content="
            Basic back bone of a website. I am a expert in Html"
        className="card-14"
        animation={Html}
        animationWidth="90%"
      />
      <VCard
        title="React"
        content="
            This website is made using React.js. I have a firm knowledge in 
            building a dynamic website with React.js"
        className="card-15"
        animation={ReactAnim}
      />
      <HCard
        title="Data Structure"
        content="
            As a programmer Data structure is very important to optimize the code
            and make it more fast and reliable."
        className="card-16"
        animation={DSA}
        animationWidth="100%"
      />
      <HCard
        title="UI / UX"
        content="
            We make have many features in our application without proper UI
            user may not able to use the feature. I love experimenting which design suits the software. "
        className="card-17"
        animation={UIUX}
        animationWidth="100%"
      />
      <VCard
        title="React Native"
        content="
            I have a firm knowledge in React Native. I can develop Android and IOS app in React
            Native. It looks more similar React. I have developed a production software in
            React Native"
        className="card-18"
        animation={ReactNative}
      />
    </div>
  );
};

export default Body;
