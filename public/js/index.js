'use strict';

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const ctaModal = document.querySelector('.cta-modal');
const ctaModalBtn = document.querySelectorAll('.cta-button');
const closeModalBtn = document.querySelector('.close-modal-btn');
/////////////hamburger menu
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
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
