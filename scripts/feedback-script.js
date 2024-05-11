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


input_name = document.querySelector("#name");
function validName(name) {
    return name.length !== 0;
}

input_email = document.querySelector("#email");
const validEmail = (email) => {
    return email.match(
        /^((([0-9A-Za-z][-0-9A-z.]+[0-9A-Za-z])|([0-9А-Яа-я][-0-9А-я.]+[0-9А-Яа-я]))@([-A-Za-z]+\.){1,2}[-A-Za-z]{2,})$/
    );
};


input_message = document.querySelector("#message");
function validMessage(message) {
    return message !== "";

}

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
            submitButton.classList.replace('button-loading', 'button-success');
        })
        .catch(error => {
            submitButton.textContent = "Успешно отправлено";
            submitButton.disabled = false;
            alert("Ошибка при отправке: " + error.message);
            submitButton.classList.replace('button-loading', 'button-success');
        });
}

const feedbackForm = document.querySelector('.feedback-feedback-form');
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    console.log(message);

    if (validEmail(email) && validName(name) && validMessage(message)) {
        submitButton.textContent = "Отправляем...";
        submitButton.classList.add('button-loading');
        submitButton.disabled = true;
        sendData({ name, email, message });
    } else if (!validName(name)) {
        alert("Проверьте номер телефона.");
    } else if (!validEmail(email)) {
        alert("Проверьте почтовый адрес.");
    } else if (!validMessage(message)) {
        alert("Проверьте текст сообщения.");
    }
});



feedback-form.addEventListener("submit", (e) => {
    sendButton.value = "Отправляем";
    setTimeout(function() {
        sendButton.value = "Отправлено!";
        sendButton.disabled = true;
    }, 2000);
    e.preventDefault();
    const formData = new FormData(feedback-form);
    fetch("/feedback", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});





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
    handleInput(validEmail, input_email);
    handleInput(validName, input_name);
    handleInput(validMessage, input_message);
}, 100);



