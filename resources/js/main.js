import Slides from "./slides.js";

const aboutIconsContainer = document.querySelector('.about-icons')

const changeActive = () => {
    const active = aboutIconsContainer.querySelector('.active');
    const next = active.nextElementSibling ?? aboutIconsContainer.firstElementChild;

    next.classList.toggle('active');
    active.classList.toggle('active');
}

const changeActiveInterval = setInterval(changeActive, 1500);

const projectCarousel = document.querySelector('#portfolio .projects-container');
new Slides(projectCarousel, true)