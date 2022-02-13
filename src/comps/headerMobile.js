import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import styles from "../css/header.css";
import Open from "../functions/open";

function HeaderMobile() {
    return (
        <section className="header-mobile">
            <button className="burger" onClick={Open}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </button>
            <div className="menu-open">
                <div className="menu-text">
                    <h1>MENU</h1>
                </div>
                <Header />
                <Sidebar />
            </div>
        </section>
    )
}

export default HeaderMobile;