import { flippedElement, rotate } from './Constants';

const toggleCard = () => {
    rotate.forEach((el) => {
        el.addEventListener('click', (event) => {
            const card = event.target.closest('.card');

            if (card.classList.contains('flipped')) {
                card.classList.remove('flipped');
            } else {
                card.classList.add('flipped');
                // el.classList.add('visibility-hidden');
                // el.style.opacity = '0';
            }
        });
    });
};

const flippedCard = () => {
    flippedElement.forEach((element) => {
        element.addEventListener('mouseleave', () => {
            // const cardBtn = element.lastElementChild;
            if (element.classList.contains('flipped')) {
                element.classList.remove('flipped');
                // cardBtn.classList.remove('visibility-hidden');
                // cardBtn.style.opacity = '1';
            }
        });
    });
};

toggleCard();
flippedCard();

// btn.addEventListener('click', function (event) {
//     event.target.closest('parent-element').style.background = 'red';
//   });
