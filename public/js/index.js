'use strict';

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const ctaModal = document.querySelector('.cta-modal');
const ctaModalBtn = document.querySelectorAll('.cta-button');
const closeModalBtn = document.querySelector('.close-modal-btn');
const introductionSection = document.querySelector('.introduction-container');
const introductionBtn = document.querySelector('.scroll-to-introduction');
const testimonialSection = document.querySelector('.testimonial-container');
const testimonialBtn = document.querySelector('.scroll-to-testimonials');
const staffSection = document.querySelector('.staff-container');
const staffBtn = document.querySelector('.scroll-to-staff');
const pricingSection = document.querySelector('.pricing-container');
const pricingBtn = document.querySelector('.scroll-to-pricing');
const contactSection = document.querySelector('.hero-container');
const contactBtn = document.querySelector('.scroll-to-contact');
/////////////hamburger menu
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});
/////////////scrolling
introductionBtn.addEventListener('click', (e) => {
    e.preventDefault();
    introductionSection.scrollIntoView({ behavior: 'smooth' });
});
testimonialBtn.addEventListener('click', (e) => {
    e.preventDefault();
    testimonialSection.scrollIntoView({ behavior: 'smooth' });
});
staffBtn.addEventListener('click', (e) => {
    e.preventDefault();
    staffSection.scrollIntoView({ behavior: 'smooth' });
});
pricingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    pricingSection.scrollIntoView({ behavior: 'smooth' });
});
contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
});
//////////////Modal window

function closeModal() {
    ctaModal.classList.add('hidden');
}
ctaModalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        ctaModal.classList.remove('hidden');
    });
});

closeModalBtn.addEventListener('click', () => {
    closeModal();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
ctaModal.addEventListener('click', function (e) {
    if (e.target === ctaModal) {
        closeModal();
    }
});

///////////////slideshow
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
