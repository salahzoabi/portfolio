export default class Slides {
    constructor(element, dots = false) {
        this.carousel = element;
        this.carousel.classList.add('slides-carousel');

        this.dots = dots;

        const active = element.querySelector('[data-carousel-active]');
        this.currentSlide = active ? [...element.children].indexOf(active) : 0;

        this.createHTML();
    }

    nextSlide() {
        const s = (this.currentSlide + 1 < this.carousel.children.length - 3) ? this.currentSlide + 1 : 0;
        this.goToSlide(s);
    }

    prevSlide() {
        const s = (this.currentSlide - 1 >= 0) ? this.currentSlide - 1 : this.carousel.children.length - 4;
        this.goToSlide(s);
    }

    goToSlide(number) {
        this.carousel.children[this.currentSlide].removeAttribute('data-carousel-active');
        this.carousel.children[number].setAttribute('data-carousel-active', '');
        this.currentSlide = number;
    }

    createHTML() {
        [this.btnNext, this.btnPrev] = this.createButtons();
        this.dots = this.createDots();
    }

    createButtons() {
        const next = document.createElement('button');
        next.innerHTML = '&rsaquo;';
        next.classList.add('slides-next');
        next.addEventListener('click', () => this.nextSlide());
        const prev = document.createElement('button');
        prev.innerHTML = '&lsaquo;';
        prev.classList.add('slides-prev');
        prev.addEventListener('click', () => this.prevSlide());

        this.carousel.append(prev, next);

        return [next, prev]
    }

    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('dots-container');

        dotsContainer.style.display = this.dots ? 'block' : 'none';

        this.carousel.append(dotsContainer);

        this.createDotsButtons(dotsContainer);

    }

    createDotsButtons(container) {
        for (let slide = 0; slide < this.carousel.children.length - 3; slide++) {
            const dot = document.createElement('button');

            dot.addEventListener('click', () => this.goToSlide(slide));

            container.append(dot)
        }
    }
}