import react from "react";
import styles from "../css/projects.css";
import scratch from "../img/scratch.png";

function Project({ title, text, tech, year, img, link }) {
    return (
        <div className="project">
            <a href={link} className="fade" target="_blank">
                <img src={img} />
                <div className="img-overlay"></div>
            </a>
            <div className="textBox">
                <h4 className="fade">{title}</h4>
                <p className="projectText fade">{text}</p>
                <p className="projectTech fade">{tech}</p>
                <p className="projectYear fade">{year}</p>
            </div>
        </div>
    )
}

export default Project;