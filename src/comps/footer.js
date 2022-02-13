import React from "react";
import styles from "../css/footer.css";

function Footer() {
    return (
        <section className="footer">
            <p>©Copyright {new Date().getFullYear()} <br></br> All rights reserved.</p>
        </section >
    )
}

export default Footer;