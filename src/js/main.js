/* main.js */
import "./import/blocks";
import "./import/components";

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
})

modalClose.addEventListener('click', () => {
    if (authBtn.classList.contains('auth-btn--opened')) {
        authBtn.classList.remove('auth-btn--opened');
    }
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

