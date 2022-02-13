import React from "react";

function Close() {
    document.body.classList.remove("noScroll");
    document.querySelector(".menu-open").classList.remove("open");
    document.querySelector(".menu-text").classList.remove("toLeft");
    document.querySelector(".header-mobile nav").classList.remove("toRight");
    document.querySelector(".header-mobile .sidebar").classList.remove("up");
    document.querySelector(".burger").classList.remove("burger-none");
}

export default Close;