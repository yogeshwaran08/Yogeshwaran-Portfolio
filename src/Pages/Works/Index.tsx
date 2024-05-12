import React from "react";
import "./Works.css";
import WorkCard from "../../Components/WorkCard/Index";

const Work = () => (
  <div className="work-container">
    <h1 className="title">My works</h1>
    <div className="works">
      <WorkCard
        title="Dude chatting App"
        content="A robust chatting application made in React native and awaiting to be published
                playstore. I am exicited to share you the download link"
        link={""}
        duration="1 Month"
        tech={"React native, Firebase"}
      />
      <WorkCard
        title="Butter species classification using Deep learning"
        content="Made a deep learning approch to identify and classify 
        butterfly species using transfer learning"
        link={""}
        duration="1 Week"
        tech="Python (Tensorflow)"
      />
      <WorkCard
        title="Image Caption Generator using Deep learning and NLTK"
        content="Deep learning approch for generating caption of a image using
        Xception model and LSTM."
        link={""}
        duration="1 Week"
        tech="Python (tensorflow)"
      />
      <WorkCard
        title="Telegram Scraper"
        content="A bot to scrap all telegram data and process it and store it in Mongo DB 
        for further analysis using matplotlib and so on."
        link={""}
        duration="2 Weeks"
        tech="Python"
      />
      <WorkCard
        title="Vechicle Number plate Recognition"
        content="A Fast CNN approch to recognize the Vechicle number plate and store in 
        mongo DB."
        duration="11 Days"
        link={""}
        tech={"Python"}
      />
      <WorkCard
        title="Patient details store using Web3"
        content="A Web 3 Based project that collect patient data and store the data in
        Ethereum based blockchain."
        link={""}
        duration="1 month"
        tech="React, Solidity, IPFS"
      />
    </div>
  </div>
);

export default Work;
