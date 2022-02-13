import React from "react";
import SingleTech from "./singleTech";
import styles from "../css/tech.css";
import importAllImg from "../functions/getImages";

const images = importAllImg(require.context('../img', false, /\.(png|jpe?g|svg)$/));

function Tech() {
    return (
        <section className="tech" id="techniques">
            <h2 className="heading fade">Technologies</h2>

            <div className="tech-grid">
                <SingleTech img={images["html.png"].default} />
                <SingleTech img={images["css.png"].default} />
                <SingleTech img={images["js.png"].default} />
                <SingleTech img={images["react.png"].default} />
                <SingleTech img={images["sass.png"].default} />
                <SingleTech img={images["ts.png"].default} />
                <SingleTech img={images["php.png"].default} />
                <SingleTech img={images["wp.png"].default} />
                <SingleTech img={images["java.png"].default} />
            </div>
        </section>
    )
}

export default Tech;