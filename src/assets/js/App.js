import cards from './Cards';
// eslint-disable-next-line object-curly-newline
import {
    containerMain,
    containerQuestion,
    containerCard,
    titleWordEng,
    titleWordRus,
    imgFrontCard,
    imgBackCard,
    audioVoice,
    menu,
    rotate,
    randomAudioVoice,
    checkbox,
    messageBlockElem,
    message,
    alertText,
    gameBtn,
    hamburgerButton,
    soundEffect,
    categotyText,
    marks,
    links,
} from './Constants';
import showNavBar from './Humburger';
import createFinishGameIcon from './CreatingMessage';

let soundArr = [];
let tempSoundArr = [];
let answearsArray = [];
let tempArr = [];
const yyyy = [];

const randomArraySorted = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line no-param-reassign
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const removeInactiveModeCard = () => {
    imgFrontCard.forEach((element) => {
        element.classList.remove('inactive');
    });
};

const startingGame = () => {
    gameBtn.addEventListener('click', (event) => {
        if (!event.target.classList.contains('repeat') && soundArr.length !== 8) {
            console.log('1');
            tempSoundArr = soundArr.concat(tempArr);
            tempArr = [];
            soundArr = tempSoundArr;
            console.log(soundArr);
            console.log(yyyy);
            // soundArr = tempSoundArr;
            randomArraySorted(soundArr);
            gameBtn.classList.add('repeat');
            randomAudioVoice.src = `${soundArr[0]}`;
            setTimeout(() => randomAudioVoice.play(), 600);
        } else if (!event.target.classList.contains('repeat')) {
            randomArraySorted(soundArr);
            gameBtn.classList.add('repeat');
            randomAudioVoice.src = `${soundArr[0]}`;
            setTimeout(() => randomAudioVoice.play(), 600);
        } else {
            randomAudioVoice.src = `${soundArr[0]}`;
            randomAudioVoice.play();
        }
    });
};

const toggleCardDisplay = () => {
    containerMain.classList.toggle('container-display-none');
    containerQuestion.classList.toggle('container-display-none');
};

const returnToMainMenu = () => {
    setTimeout(() => {
        messageBlockElem.parentNode.removeChild(messageBlockElem);
        toggleCardDisplay();
        categotyText.innerText = 'Categories';
        tempSoundArr = [];
        links.forEach((link, i) => {
            link.classList.remove('nav__text_active');
            if (i === 0) link.classList.add('nav__text_active');
        });
    }, 3000);
};

const swichStyleInModes = () => {
    imgFrontCard.forEach((el) => {
        el.classList.toggle('card-cover');
    });
    titleWordEng.forEach((el) => {
        el.classList.toggle('non-visible');
    });
    rotate.forEach((el) => {
        el.classList.toggle('non-visible');
    });
    containerCard.forEach((el) => {
        el.classList.toggle('blue');
    });
    menu.classList.toggle('blue');
    gameBtn.classList.toggle('none');
    marks.classList.toggle('none');
};

const switchGameMode = () => {
    checkbox.onchange = () => {
        if (checkbox.checked) {
            if (soundArr.length === 8) tempSoundArr = soundArr.map((el) => el);
            answearsArray = [];
            swichStyleInModes();
            gameBtn.classList.remove('repeat');
            marks.innerHTML = '';
            removeInactiveModeCard();
        } else {
            if (soundArr.length === 8) tempSoundArr = soundArr.map((el) => el);
            swichStyleInModes();
        }
    };
};

startingGame();

const createListCard = (someValue) => {
    if (soundArr.length !== 0) {
        soundArr = [];
        tempSoundArr = [];
    }
    tempArr = [];
    answearsArray = [];
    marks.innerHTML = '';
    gameBtn.classList.remove('repeat');
    removeInactiveModeCard();
    let section;
    for (let i = 0; i < cards[0].length; i += 1) {
        if (cards[0][i] === someValue) {
            section = i + 2;
            categotyText.innerText = cards[1][i];
        }
    }
    let currSound;
    cards[section].forEach((card, i) => {
        titleWordEng[i].innerText = card.word;
        titleWordRus[i].innerText = card.translation;
        imgFrontCard[i].style = `background-image : url( ./assets/images${card.image}  )`;
        imgBackCard[i].style = `background-image : url( ./assets/images${card.image}  )`;
        audioVoice[i].src = `./assets/audio${card.audioSrc}`;
        currSound = audioVoice[i].src;
        soundArr.push(currSound);
        // tempSoundArr.push(currSound);
    });
};

const listenCardVoice = () => {
    imgFrontCard.forEach((element) => {
        element.addEventListener('click', (event) => {
            if (!event.target.classList.contains('rotate') && !event.target.classList.contains('card-cover')) {
                element.previousElementSibling.play();
            } else if (gameBtn.classList.contains('repeat')) {
                const currentCardSound = element.previousElementSibling.src;
                if (currentCardSound === soundArr[0] && !event.target.classList.contains('inactive')) {
                    soundEffect.src = './assets/audio/correct.mp3';
                    soundEffect.play();
                    const tempEl = soundArr.shift();
                    tempArr.push(tempEl);
                    console.log(soundArr);
                    console.log(tempSoundArr);
                    const starCorrect = document.createElement('div');
                    starCorrect.classList = 'star-succes';
                    marks.prepend(starCorrect);
                    answearsArray.push('1');
                    element.classList.add('inactive');

                    // TTTTTTTTTTTTTTTTTTT
                    if (soundArr.length !== 0) {
                        randomAudioVoice.src = `${soundArr[0]}`;
                        setTimeout(() => randomAudioVoice.play(), 1000);
                    } else if (answearsArray.includes('2')) {
                        let count = 0;
                        answearsArray.forEach((el) => {
                            if (el === '2') count += 1;
                        });
                        randomAudioVoice.src = './assets/audio/failure.mp3';
                        // createFinishGameIcon();
                        setTimeout(createFinishGameIcon(), 1000);
                        message.style = 'background-image : url( ./assets/images/failure.png  )';
                        alertText.innerText = `You have ${count} mistakes`;
                        returnToMainMenu();
                    } else {
                        randomAudioVoice.src = './assets/audio/success.mp3';
                        // createFinishGameIcon();
                        setTimeout(createFinishGameIcon(), 1000);
                        message.style = 'background-image : url( ./assets/images/success.png )';
                        alertText.innerText = 'Success';
                        returnToMainMenu();
                    }
                } else if (event.target.classList.contains('inactive')) {
                    event.preventDefault;
                } else {
                    const starError = document.createElement('div');
                    starError.classList = 'star-error';
                    marks.prepend(starError);
                    soundEffect.src = './assets/audio/error.mp3';
                    soundEffect.play();
                    answearsArray.push('2');
                }
            }
        });
    });
};

const switchMenu = () => {
    containerCard.forEach((el) => {
        el.addEventListener('click', (event) => {
            toggleCardDisplay();

            const { currentTarget } = event;
            const sectionName = currentTarget.getAttribute('value');

            createListCard(sectionName);

            links.forEach((link) => {
                link.classList.remove('nav__text_active');
                const navValue = link.getAttribute('value');

                if (sectionName === navValue) {
                    link.classList.add('nav__text_active');
                }
            });
        });
    });
};

const switchMenuToCategory = () => {
    menu.addEventListener('click', (event) => {
        const { target } = event;
        if (target.tagName !== 'A') return;
        links.forEach((el) => el.classList.remove('nav__text_active'));
        target.classList.add('nav__text_active');

        const sectionName = target.getAttribute('value');
        if (sectionName !== 'main') {
            containerMain.classList.add('container-display-none');
            containerQuestion.classList.remove('container-display-none');
            createListCard(sectionName);
            showNavBar();
            hamburgerButton.classList.toggle('hamburger-vert');
        } else {
            categotyText.innerText = 'Categories';
            containerMain.classList.remove('container-display-none');
            containerQuestion.classList.add('container-display-none');
            showNavBar();
            hamburgerButton.classList.toggle('hamburger-vert');
        }
    });
};

listenCardVoice();

switchGameMode();
switchMenu();
switchMenuToCategory();
