const header = document.getElementById("header");

const headerHeight = header.clientHeight;

window.onscroll = function () {

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
        header.style.transition = "background-color 0.5s ease";
        header.style.background = "-webkit-linear-gradient(250deg, #003366 40%, #0066CC 150%)";
        header.style.backdropFilter = "blur(5px)"
        header.style.borderBottomColor = "#983404"
    } else {
        header.classList.remove("scrolled");
        header.style.transition = "background-color 0.5s ease";
        header.style.background = "";
        header.style.backdropFilter = "blur(0px)"
        header.style.borderBottomColor = "#dac894"
    }
};