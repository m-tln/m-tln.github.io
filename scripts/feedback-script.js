const openFeedbackFormButton = document.querySelector('.footer__feedback-open');
const feedbackPopup = document.querySelector('.feedback-form__container');
const closeFeedbackFormButton = document.querySelector('.feedback-form__close');
const submitButton = feedbackPopup.querySelector("input[type=submit]");

openFeedbackFormButton.addEventListener('click', () => {
    feedbackPopup.style.display = 'block';
    feedbackPopup.classList.toggle('show');
});

closeFeedbackFormButton.addEventListener('click', () => {
    feedbackPopup.style.display = 'none';
    feedbackPopup.classList.toggle('show');
});


inputName = document.querySelector("#name");
function validName(name) {
    return name.length !== 0;
}

inputEmail = document.querySelector("#email");
const validEmail = (email) => {
    return email.match(
        /^((([0-9A-Za-z][-0-9A-z.]+[0-9A-Za-z])|([0-9А-Яа-я][-0-9А-я.]+[0-9А-Яа-я]))@([-A-Za-z]+\.){1,2}[-A-Za-z]{2,})$/
    );
};


inputMessage = document.querySelector("#message");
function validMessage(message) {
    return message !== "";

}

function handleInput(predicate, element) {
    if (predicate(element.value)) {
        element.classList.remove("invalid");
        element.classList.add("valid");
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
    }
}

setInterval(() => {
    handleInput(validEmail, inputEmail);
    handleInput(validName, inputName);
    handleInput(validMessage, inputMessage);
}, 100);

function sendData(data) {
    fetch('http://test.test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            submitButton.textContent = "Успешно отправлено";
            submitButton.classList.replace('section__button_loading', 'section__button_success');
        })
        .catch(error => {
            submitButton.textContent = "Успешно отправлено";
            submitButton.disabled = false;
            alert("Ошибка при отправке: " + error.message);
            submitButton.classList.replace('section__button_loading', 'section__button_success');
        });
}



