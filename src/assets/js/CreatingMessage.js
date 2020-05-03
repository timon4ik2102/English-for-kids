import { containerQuestion, randomAudioVoice, messageBlockElem, message, messageContainer, alertText } from './Constants';

const createFinishGameIcon = () => {
    messageBlockElem.classList = 'message-block';
    containerQuestion.append(messageBlockElem);
    messageContainer.classList = 'message-block__container';
    messageBlockElem.append(messageContainer);
    alertText.classList = 'message-block__container_text';
    messageContainer.append(alertText);
    message.classList = 'message-block__container_icon';
    messageContainer.append(message);
    randomAudioVoice.play();
};

export default createFinishGameIcon;
