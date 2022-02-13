import React from "react";
import logo from "../img/logo.png";

function Sidebar() {
    return (
        <section className="sidebar">
            <a href="#" className="logo">
                <img src={logo} alt="" />
            </a>
            <div className="list-items">
                <a href="https://www.linkedin.com/in/rasmus-andersson-raz/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/anderrssonrasmus/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rasmus022.ra@gmail.com" target="_blank">
                    <i class="far fa-envelope"></i>
                </a>
            </div>
            <div className="line"></div>
        </section>
    )
}

export default Sidebar;