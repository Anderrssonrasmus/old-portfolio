import react from "react";
import styles from "../css/projects.css";
import Project from "./project";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images["scratch.png"].default)
    return images;
}

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


function Projects() {
    return (
        <section className="projects" id="projects">
            <div class="headerWaves">
                <div>
                    <svg class="waves"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g class="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>

            <h2 className="heading fade">Projects</h2>

            <div className="projects-container">
                <Project title="Scratch" text="This was a project me and a friend did as a gymnasiearetem, we decided to make a web-based note app that you could log into through googles API. We never finished it." tech="HTML SASS/CSS JS PHP" year="2020" img={images["scratch.png"].default} link="#" />
                <Project title="NTI" text="This was a project me and that same friend worked on as APL with our school, we got to design a new website for them, we didn't finish it because of time restraints." tech="HTML SASS/CSS JS PHP Wordpress" year="2020" img={images["scratch.png"].default} />
                <Project title="J.R Consult" text="A project that I got from a family friend who wanted a really simple website with inmformation about his new company. It was a small project that only took a day." tech="HTML, SASS/CSS" year="2021" img={images["jrconsult.png"].default} link="http://www.jrconsult.se" />
            </div>

        </section>
    )
}

export default Projects;