function countdownScript(targetDate) {
    const endDate = new Date(targetDate).getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const difference = endDate - now;

        if (difference < 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = "Событие началось!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }, 1000);
}

countdownScript('2027-06-21');