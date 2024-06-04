



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
    }, 900); // Встановлюємо затримку в 2.5 секунди
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



document.addEventListener('DOMContentLoaded', function() {
    // Отримання кнопок
    var timerBtn = document.querySelector('.timer__shh');
    var refBtn = document.querySelector('.ref__back');
    var mainTime = document.querySelector('.main__time');

    // Додавання обробника події для кнопки timer__shh
    timerBtn.addEventListener('click', function() {
        mainTime.classList.add('hidden'); // Додаємо клас, щоб сховати main__time
    });

    // Додавання обробника події для кнопки ref__back
    refBtn.addEventListener('click', function() {
        mainTime.classList.remove('hidden'); // Видаляємо клас, щоб показати main__time
    });
});












const targetDate = new Date();

targetDate.setDate(targetDate.getDate() + 0);
targetDate.setHours(2);                         
targetDate.setMinutes(21);                      
targetDate.setSeconds(1);                       

const timer = document.getElementById('timer');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const mainTime = document.querySelector('.main__time');
const mainRef = document.querySelector('.main__ref');

function updateTime() {
  const now = new Date();
  const timeLeft = targetDate.getTime() - now.getTime();

  const daysRemaining = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((timeLeft % (1000 * 60)) / 1000);

  days.textContent = `${daysRemaining}D`;
  hours.textContent = `${hoursRemaining}h`;
  minutes.textContent = `${minutesRemaining}m`;
  seconds.textContent = `${secondsRemaining}s`;

  if (timeLeft <= 0) {
    clearInterval(intervalId);
    mainTime.classList.add('hidden');
    mainRef.classList.add('hidden');
  }
}

const intervalId = setInterval(updateTime, 1000);






document.addEventListener("DOMContentLoaded", function() {
    // Отримати елементи
    var menu = document.querySelector('.menu');
    var mainPreloader = document.querySelector('.main__preloader');
    var mainTime = document.querySelector('.main__time');
    var mainRef = document.querySelector('.main__ref');
    var mainSub = document.querySelector('.main__sub');

    // Функція перевірки стану всіх елементів
    function checkAllHidden() {
        if (mainPreloader.classList.contains('hidden') &&
            mainTime.classList.contains('hidden') &&
            mainRef.classList.contains('hidden') &&
            mainSub.classList.contains('hidden')) {
            menu.style.position = 'fixed';
        } else {
            menu.style.position = 'relative';
        }
    }

    // Створити спостерігача змін класів
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                checkAllHidden();
            }
        });
    });

    // Налаштування спостерігача
    var config = {
        attributes: true,
        attributeFilter: ['class']
    };

    // Почати спостереження за всіма main елементами
    observer.observe(mainPreloader, config);
    observer.observe(mainTime, config);
    observer.observe(mainRef, config);
    observer.observe(mainSub, config);

    // Перевірити стан елементів на початку
    checkAllHidden();
});







// document.addEventListener("DOMContentLoaded", function() {
//     Telegram.WebApp.ready();

//     // Використовуйте initDataUnsafe для доступу до даних користувача
//     const userData = Telegram.WebApp.initDataUnsafe.user;

//     // Перевіряємо, чи доступні дані користувача
//     if (userData && userData.username) {
//         document.querySelector(".home__user").textContent = userData.username;
//     } else {
//         document.querySelector(".home__user").textContent = 'error';
//     }
// });




document.addEventListener("DOMContentLoaded", function() {
    Telegram.WebApp.ready();

    const userData = Telegram.WebApp.initDataUnsafe.user;

    function updateUserText(selector, text) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.textContent = text;
        });
    }

    if (userData) {
        if (userData.username && userData.username.startsWith('@')) {
            updateUserText(".home__user", userData.username);
            updateUserText(".mining__userc", userData.username);
            updateUserText(".friend__userc", userData.username);
            updateUserText(".task__userc", userData.username);
            updateUserText(".home__userc", userData.username);
        } else if (userData.first_name) {
            updateUserText(".home__user", userData.first_name);
            updateUserText(".mining__userc", userData.first_name);
            updateUserText(".friend__userc", userData.first_name);
            updateUserText(".task__userc", userData.first_name);
            updateUserText(".home__userc", userData.first_name);
        } else {
            updateUserText(".home__user", 'error');
            updateUserText(".mining__userc", 'error');
            updateUserText(".friend__userc", 'error');
            updateUserText(".task__userc", 'error');
            updateUserText(".home__userc", 'error');
        }
    } else {
        updateUserText(".home__user", 'error');
        updateUserText(".mining__userc", 'error');
        updateUserText(".friend__userc", 'error');
        updateUserText(".task__userc", 'error');
        updateUserText(".home__userc", 'error');
    }
});



















  // Функція для заборони виділення тексту та копіювання
  function disableCopying() {
    // Заборонити виділення тексту на сторінці
    document.addEventListener('selectstart', function(e) {
      e.preventDefault();
    });

    // Заборонити копіювання тексту та інших даних
    document.addEventListener('copy', function(e) {
      e.preventDefault();
    });

    // Опційно: заборонити клік правою кнопкою миші
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
  }

  // Виклик функції після завантаження сторінки
  window.onload = disableCopying;





  document.addEventListener('DOMContentLoaded', () => {
    const boostButtons = document.querySelectorAll('.mining__boost');
    const popup = document.querySelector('.mining__popup');
    const closeButton = document.querySelector('.mining__popup-clbtn');
    const popupName = popup.querySelector('.mining__popup-name');
    const popupPrice = popup.querySelector('.mining__popup-pricetxt');
    const popupContent = popup.querySelector('.mining__popup-content'); // Якщо такого класу немає, додайте його до контейнера з вмістом попапу в HTML.

    // Додаємо подію для кожної кнопки "Boost"
    boostButtons.forEach(boostButton => {
        boostButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Запобігаємо спливанню події
            const info = boostButton.querySelector('.boost__info').textContent;
            const price = boostButton.querySelector('.boost_price').textContent;
            popupName.textContent = info;
            popupPrice.textContent = price;

            popup.classList.add('show');
            popup.style.bottom = '-20px'; // Встановимо положення попапу
        });
    });

    // Додаємо подію для кнопки закриття попапу
    closeButton.addEventListener('click', () => {
        closePopup();
    });

    // Додаємо подію для закриття попапу при кліку за його межами
    document.addEventListener('click', (event) => {
        if (!popup.contains(event.target)) {
            closePopup();
        }
    });

    // Функція для закриття попапу
    function closePopup() {
        popup.classList.remove('show');
        popup.style.bottom = '-290px';
    }
});




