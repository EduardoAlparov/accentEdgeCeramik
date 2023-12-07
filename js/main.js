import Modal from "./modules/Modal.js";
import validationForm from './modules/validation.js';
import inputMasks from './modules/masks.js';
// import lazyload from './modules/lazyload.js';

import mobileMenuBehavior from './modules/mobileMenuBehavior.js';
import catalogueMenuBehavior from './modules/catalogueMenuBehavior.js';

import heroSwiper from './modules/heroSwiper.js';
import promotionsSwiper from './modules/promotionsSwiper.js';
import switcherSwiper from './modules/switcherSwiper.js';
import carouselSwiper from './modules/carouselSwiper.js';
import gallerySwiper from './modules/gallerySwiper.js';

import pointersBehavior from './modules/pointersBehavior.js';
import seoTextCollapse from './modules/seoTextCollapse.js';

import rangeControl from './modules/rangeControl.js';
import sortingControl from './modules/sortingControl.js';
import cardCounterControl from './modules/cardCounterControl.js';
import dropdownWidgetOpen from './modules/dropdownWidgetOpen.js';
import mapControl from './modules/mapControl.js';

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
            console.log('open modal');
        },
        isClose: (modal) => {
            console.log('close modal');
        },
    });

    inputMasks();
    validationForm();

    mobileMenuBehavior();
    catalogueMenuBehavior();

    heroSwiper();
    promotionsSwiper();
    switcherSwiper();
    carouselSwiper();
    gallerySwiper();

    pointersBehavior();
    seoTextCollapse();

    rangeControl();
    sortingControl();
    cardCounterControl();
    dropdownWidgetOpen();
    mapControl();


    // cookie close:
    document.querySelector('.popup-cookie__button').onclick = e => {
        e.target.closest('.popup-cookie').classList.remove('is-open');
    }

    // up button:
    document.querySelector('.footer__up-button').onclick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // promocode button:
    Array.from(document.querySelectorAll('.promocode')).forEach(p => {
        p.addEventListener('click', (e) => {
            if(e.target.closest('.promocode__button')) {
                p.classList.add('promocode--active');
                p.querySelector('.promocode__input').focus();
            }
        })
    })
})
