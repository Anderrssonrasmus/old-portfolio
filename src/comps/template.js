import react from "react";
import styles from "../css/template.css";
import profilePic from "../img/profilePic.jpg";

function Template({ title, text, text2, button, link, img, social1, social2, id }) {
    return (
        <section className="template" id={id}>
            <div className="mainPart">
                <div className="profilePic fade">
                    <div className={img === "profile" ? "profile" : ""}>
                        {img === "" ? (<i class="far fa-user"></i>) : ""}
                    </div>
                </div>
                <div className="desc">
                    <h5 className="fade">{title}</h5>
                    <p className="fade">
                        {text}
                    </p>
                    <br></br>
                    <p className="fade">
                        {text2}
                    </p>
                </div>
            </div>

            <div className="secondPart">
                <div className="spacer"></div>
                <div className="buttons fade">
                    <a href={link} className="button" target={link[0] !== "#" ? "_blank" : ""}>
                        {button}
                    </a>
                    <div className="socialIcons">
                        <a href={social1 === "gmail" ? ("https://mail.google.com/mail/?view=cm&fs=1&to=rasmus022.ra@gmail.com") : social1 === "insta" ? ("https://www.instagram.com/anderrssonrasmus/") : social1 === "linkedIn" ? ("https://www.linkedin.com/in/rasmus-andersson-raz/") : ""} target="_blank">
                            {social1 === "gmail" ? (<i class="far fa-envelope"></i>)
                                : social1 === "linkedIn" ? (<i class="fab fa-linkedin-in"></i>)
                                    : social1 === "insta" ? (<i class="fab fa-instagram"></i>) : ""}
                        </a>
                        <a href={social2 === "gmail" ? ("https://mail.google.com/mail/?view=cm&fs=1&to=rasmus022.ra@gmail.com") : social2 === "insta" ? ("https://www.instagram.com/anderrssonrasmus/") : social2 === "linkedIn" ? ("https://www.linkedin.com/in/rasmus-andersson-raz/") : ""} target="_blank">
                            {social2 === "gmail" ? (<i class="far fa-envelope"></i>)
                                : social2 === "linkedIn" ? (<i class="fab fa-linkedin-in"></i>)
                                    : social2 === "insta" ? (<i class="fab fa-instagram"></i>) : ""}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Template;