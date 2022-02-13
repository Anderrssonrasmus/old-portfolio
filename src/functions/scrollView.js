import react from "react";

function scrollAbout() {
    let innerheight = window.innerHeight;
    window.scrollTo({
        top: innerheight,
        behavior: "smooth"
    });
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top
    };
}

window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
        document.querySelector(".scroll").classList.add("noAnimation");
    }

    if (window.innerWidth > 992) {
        document.querySelectorAll(".fade").forEach(element => {
            if (getOffset(element).top < 126) {
                element.classList.add("atTop");
            } else {
                element.classList.remove("atTop");
            }
        });

        if (getOffset(document.querySelector(".scroll")).top < 126) {
            document.querySelector(".scroll").classList.add("atTop");
        } else {
            document.querySelector(".scroll").classList.remove("atTop");
        }
    } else {
        document.querySelectorAll(".fade").forEach(element => {
            if (getOffset(element).top < 32) {
                element.classList.add("atTop");
            } else {
                element.classList.remove("atTop");
            }
        });

        if (getOffset(document.querySelector(".scroll")).top < 32) {
            document.querySelector(".scroll").classList.add("atTop");
        } else {
            document.querySelector(".scroll").classList.remove("atTop");
        }
    }



    console.log(getOffset(document.querySelector(".scroll")).top)
});


export default scrollAbout;