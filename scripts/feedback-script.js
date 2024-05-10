const openFeedbackFormButton = document.querySelector('.footer__feedback-open');
const feedbackPopup = document.getElementById('feedback-popup');
const closeFeedbackFormButton = document.querySelector('.popup__feedback-close');

openFeedbackFormButton.addEventListener('click', () => {
    feedbackPopup.style.display = 'block';
});

closeFeedbackFormButton.addEventListener('click', () => {
    feedbackPopup.style.display = 'none';
});

const feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Отправка данных на сервер (здесь можно использовать AJAX или fetch)
    // Для примера мы просто выводим сообщение на страницу
    alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
    feedbackPopup.style.display = 'none';
});
