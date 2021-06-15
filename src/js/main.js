/* main.js */
import "./import/blocks";
import "./import/components";

const modalBtn = document.querySelectorAll('.modal-btn');
const body = document.querySelector('body');
const authBtn = document.querySelector('.auth-btn');
const modalOverlay = document.querySelector('.modal__overlay');
const modalClose = document.querySelector('.modal__close');
const programItem = document.querySelectorAll('.program__item');


authBtn.addEventListener('click', () => {
    authBtn.classList.add('auth-btn--opened');
})

modalOverlay.addEventListener('click', () => {
    if (authBtn.classList.contains('auth-btn--opened')) {
        authBtn.classList.remove('auth-btn--opened');
    }
    body.classList.remove('no-scroll');
})

modalClose.addEventListener('click', () => {
    if (authBtn.classList.contains('auth-btn--opened')) {
        authBtn.classList.remove('auth-btn--opened');
    }
    body.classList.remove('no-scroll');
})
modalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        body.classList.add('no-scroll');
    })
})

programItem.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('_active');
        const programSubList = item.lastElementChild;
        if (programSubList.style.maxHeight) {
            programSubList.style.maxHeight = null;
        } else {
            programSubList.style.maxHeight = programSubList.scrollHeight + 'px';
        }
    })
})

