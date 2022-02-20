import React from "react";
import styles from "../css/main.css";
import scrollAbout from "../functions/scrollView";

function Main() {
    return (
        <section className="main">
            <div>
                <h2 className="fade"><span>R</span>asmu<span>s</span> <span>A</span>ndersson</h2>
                <h3 className="fade">Web Developer</h3>
                <p className="fade">Wordpress/React33</p>
            </div>
            <button className="scroll" onClick={scrollAbout}>
                <i class="fas fa-chevron-down"></i>
                <h5>Scroll down</h5>
            </button>
        </section>
    )
}

export default Main;