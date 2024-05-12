import "./Works.css";
import WorkCard from "../../Components/WorkCard/Index";
import { WorkData } from "./WorkData";

const Work = () => (
  <div className="work-container">
    <h1 className="title">My works</h1>
    <div className="works">
      {WorkData.map((content, index) => (
        <WorkCard
          title={content.title}
          content={content.content}
          link={content.link}
          duration={content.duration}
          tech={content.tech}
          key={index}
        />
      ))}
    </div>
  </div>
);

export default Work;
