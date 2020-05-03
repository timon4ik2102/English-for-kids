import { hamburgerButton, overlay, leftMenu } from './Constants';

const showNavBar = () => {
    overlay.classList.toggle('overlay-active');
    leftMenu.classList.toggle('nav-active');
};

hamburgerButton.addEventListener('click', () => {
    showNavBar();
    hamburgerButton.classList.toggle('hamburger-vert');
});

overlay.addEventListener('click', () => {
    hamburgerButton.classList.toggle('hamburger-vert');
    showNavBar();
});

export default showNavBar;
