import React from "react";
import Header from "./comps/header";
import HeaderMobile from "./comps/headerMobile";
import Sidebar from "./comps/sidebar";
import Main from "./comps/mainSection";
import Template from "./comps/template";
import styles from "././css/sidebar.css";
import Projects from "./comps/projects";
import importAllImg from "./functions/getImages";
import importAllFiles from "./functions/getFiles";
import Tech from "./comps/tech";
import Footer from "./comps/footer";

const images = importAllImg(require.context('./img', false, /\.(png|jpe?g|svg)$/));
const files = importAllFiles(require.context('./files', false, /\.(pdf)$/));


function App() {
    return (
        <div className="app">
            <Header />

            <HeaderMobile />

            <Sidebar />

            <Main />

            <Template
                title="Heyo! I'm Rasmus - a frontend developer from Sundsvall, Sweden"
                text="I have always been fascinated by websites since I was a young kid playing browser games. When I had the oppurtunity to learn the ins and outs of website development, I didn't think twice about it."
                text2="The process of designing and figuring out the structure and layout of the website are two of my favorite things about being a developer."
                button="What do I know?"
                link="#techniques"
                img="profile"
                social1="insta"
                social2="linkedIn"
                id="about" />

            <Projects />

            <Tech />

            <Template
                title="Want to know more or contact me?"
                text="Below you can find the download for my personal CV (in swedish) with some more information about me any my previous work. You will also find a cover letter explaining more in depth how I like to work."
                text2="You can also find the means to contact me below, I prefer to be contacted via Email, but if LinkedIn fits you better, feel free yo use that."
                button="Download CV"
                link={files["RasmusAndersson.pdf"].default}
                img=""
                social1="gmail"
                social2="linkedIn"
                id="contact" />

            <Footer />

        </div>
    )
}

export default App;