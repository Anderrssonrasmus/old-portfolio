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
                <Project title="Scratch" text="This was a project me and a friend did as a 'Gymnasiearbete', we decided to make a web-based note app that you could log into through googles API. We never finished it." tech="HTML SASS/CSS JS PHP" year="2020" img={images["scratch.png"].default} />
                <Project title="NTI" text="This was a project me and that same friend worked on as APL with our school, we got to design a new website for them, we didn't finish it because of wide scope combined with time restraints." tech="HTML SASS/CSS JS PHP Wordpress" year="2020" img={images["missing.jpg"].default} />
                <Project title="J.R Consult" text="A project that I got from a family friend who wanted a really simple website out as fast as possible with information about his new company. It was a small project that only took a day." tech="HTML, SASS/CSS" year="2021" img={images["jrconsult.png"].default} link="http://www.jrconsult.se" />
                <Project title="Gabioner Sweden" text="Project I was assigned at the company I work for. The design was already finished and I was tasked with making that design a reality." tech="Wordpress, Elementor, JetEngine, CSS" year="2022" img={images["gabioner.png"].default} link="https://www.gabionersweden.se" />
                <Project title="HighCoast forestry" text='Project I was assigned at the company I work for. I was tasked with designing their new webiste aswell as developing it and making that design a reality. They wanted their page to be "inspired" by sweco.se.' tech="Wordpress, Elementor, JetEngine, CSS" year="2022" img={images["highcoast.png"].default} link="https://www.highcoastforestry.com" />
                <Project title="Kanyakorn Thaimassage" text="A project I was assigned to finish, the design was already done and I was tasked to complete it for the customer." tech="Wordpress, Elementor, JetEngine, CSS" year="2022" img={images["kanyakorn.png"].default} link="https://www.kanyakorn.se" />
                <Project title="GRIT (Ongoing)" text="A project I was assigned at the company I work for. My task was to design and build a website for the customer, the project is ongoing but was put on pause early on in the development process." tech="Wordpress, Elementor, JetEngine, CSS" year="2022" img={images["grit.png"].default} link="https://grit.fostira.com/" />
                <Project title="Savon (Ongoing)" text="A project I was assigned very early on in my employment at the company I work for. My task was to design and build a website for the customer, the project is ongoing but was put on pause." tech="Wordpress, Elementor, JetEngine, Woocommerce, CSS" year="2022" img={images["savon.png"].default} link="https://savon.fostira.com/" />
                <Project title="Tillväxtlabbet (Ongoing)" text="A project I was assigned at the company I work for. My task was to design and build a website for the customer together with one other developer, the project is ongoing and is expected to be live by the end of september." tech="Wordpress, Elementor, JetEngine, CSS" year="2022" img={images["tillvaxtlabbet.png"].default} link="https://tillvaxtlabbet.fostira.com/" />
                <Project title="Åberg Inredningar (Ongoing)" text="A project I was assigned at the company I work for. My task was to design and build a website for the customer." tech="Wordpress, Elementor, JetEngine, CSS" year="2022" img={images["aberg.png"].default} link="https://aberginredningar.fostira.com/" />

            </div>

        </section>
    )
}

export default Projects;