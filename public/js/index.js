'use strict';

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const ctaModal = document.querySelector('.cta-modal');
const ctaModalBtn = document.querySelector('.cta-button');
const closeModalBtn = document.querySelector('.close-modal-btn');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

ctaModalBtn.addEventListener('click', () => {
    ctaModal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    ctaModal.classList.add('hidden');
});
