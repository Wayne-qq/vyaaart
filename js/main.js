


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const logoText = document.getElementById('logo-text');
        const text = 'Token';
        let index = 0;

        logoText.style.visibility = 'visible'; // Показуємо текст після затримки

        function typeWriter() {
            if (index < text.length) {
                logoText.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 200); // Швидкість друкування (100 мс на символ)
            }
        }

        typeWriter();
    }, 1200); // Затримка 1.2 секунди
});





document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var preloader = document.querySelector(".main__preloader");
        preloader.classList.add("hidden");
    }, 2900); // Встановлюємо затримку в 2.5 секунди
});






document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector('.close__error-sub');
    const mainElement = document.querySelector('.main__sub');

    closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        mainElement.classList.add('hidden');
    });
});










document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const userLinks = document.querySelectorAll('.main__user-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = link.getAttribute('data-target');
            showPage(target);
            setActiveLink(link);
        });
    });

    userLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            showPage('main__user');
            setActiveLink(null);
        });
    });

    function showPage(className) {
        let pages = document.querySelectorAll('main');
        pages.forEach(page => {
            if (page.classList.contains(className)) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    }

    function setActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});








document.addEventListener("DOMContentLoaded", function() {
    function startTimer(endtime) {
        const timerInterval = setInterval(function() {
            const now = new Date().getTime();
            const distance = endtime - now;

            if (distance < 0) {
                clearInterval(timerInterval);
                document.querySelector('.main__time').classList.add('hide');
                return;
            }

            // Обрахунок днів, годин, хвилин та секунд
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Відображення часу на сторінці
            document.getElementById('days').textContent = days + "D";
            document.getElementById('hours').textContent = hours + "h";
            document.getElementById('minutes').textContent = minutes + "m";
            document.getElementById('seconds').textContent = seconds + "s";
        }, 1000);
    }

    // Читання чи установка часу завершення
    let endTime = localStorage.getItem("endTime");
    if (!endTime) {
        const now = new Date().getTime();
        // Наприклад, таймер на 2 дні, 18 годин, 37 хвилин, 9 секунд
        endTime = now + (2 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000) + (37 * 60 * 1000) + (9 * 1000);
        localStorage.setItem("endTime", endTime);
    }

    startTimer(parseInt(endTime));
});










