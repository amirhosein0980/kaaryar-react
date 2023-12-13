import './HandleInput.css';

function HandleInput(event) {
    const persianRegex = /^[\u0600-\u06FF\s]+$/;
    if (!persianRegex.test(event.target.value)) {
        event.target.value = event.target.value.substring(0, event.target.value.length - 1);
    }
    return persianRegex
}

export default HandleInput;