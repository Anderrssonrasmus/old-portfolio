import react from "react";
import styles from "../css/header.css";
import Close from "../functions/close";
import OpenClose from "../functions/open";

function Header() {
    return (
        <section className="header">
            <nav>
                <ul>
                    <li>
                        <a href="#projects" onClick={Close}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={Close}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={Close}>
                            Contact
                        </a>
                    </li>
                    <li className="closeButton">
                        <button onClick={Close}>
                            <i class="fas fa-chevron-left"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Header;