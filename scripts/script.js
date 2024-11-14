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

let currentIndex = 0;

function updateSlider(index) {
    const slider = document.querySelector('.slider');
    const offset = index * 100;
    slider.style.transform = `translateX(-${offset}%)`;
    slider.style.opacity = 0.6;
    setTimeout(() => {
        slider.style.opacity = 1; 
    }, 350); 
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.menu-item[data-index="${index + 1}"]`).classList.add('active');
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => { 
        const index = parseInt(item.getAttribute('data-index')) - 1;
        currentIndex = index;
        updateSlider(index);
    });
});

const slider = document.querySelector('.slider');
const hammer = new Hammer(slider);

hammer.on('swipeleft', () => {
    currentIndex = (currentIndex + 1) % 5;
    updateSlider(currentIndex);
});

hammer.on('swiperight', () => {
    currentIndex = (currentIndex - 1 + 5) % 5;
    updateSlider(currentIndex);
});

updateSlider(currentIndex);