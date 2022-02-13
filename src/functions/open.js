import React from "react";

function Open() {
    document.body.classList.add("noScroll");
    document.querySelector(".menu-open").classList.add("open");
    document.querySelector(".menu-text").classList.add("toLeft");
    document.querySelector(".header-mobile nav").classList.add("toRight");
    document.querySelector(".header-mobile .sidebar").classList.add("up");
    document.querySelector(".burger").classList.add("burger-none");
}

export default Open;