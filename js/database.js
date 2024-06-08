// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// // Функція для ініціалізації бази даних
// export function initializeDatabase(db) {
//   // Функція для додавання даних до бази даних Firebase
//   async function addToDatabase() {
//     try {
//       // Додавання документу з текстом "привіт" у вашу колекцію "greetings"
//       await addDoc(collection(db, "greetings"), {
//         message: "привіт гіт"
//       });

//       console.log("Дані успішно додані до бази даних");
//     } catch (error) {
//       console.error("Помилка додавання даних до бази даних:", error);
//     }
//   }

//   // Виклик функції для додавання даних при завантаженні сторінки
//   window.onload = addToDatabase;
// }





import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Функція для ініціалізації бази даних
export function initializeDatabase(db) {
  // Функція для додавання даних до бази даних Firebase
  async function addToDatabase() {
    try {
      // Додавання документу з текстом "привіт гіт" у вашу колекцію "greetings"
      await addDoc(collection(db, "greetings"), {
        message: "Я додав дані до бази 2"
      });

      console.log("Дані успішно додані до бази даних");
    } catch (error) {
      console.error("Помилка додавання даних до бази даних:", error);
    }
  }

  // Виклик функції для додавання даних при завантаженні сторінки
  window.onload = addToDatabase;
}




// let tapFarm = 1;
// let balance = 0;
// let tapCount = 0;




// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//         const logoText = document.getElementById('logo-text');
//         const text = 'Token';
//         let index = 0;

//         logoText.style.visibility = 'visible'; // Показуємо текст після затримки

//         function typeWriter() {
//             if (index < text.length) {
//                 logoText.innerHTML += text.charAt(index);
//                 index++;
//                 setTimeout(typeWriter, 200); // Швидкість друкування (100 мс на символ)
//             }
//         }

//         typeWriter();
//     }, 100); // Затримка 1.2 секунди
// });





// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//         var preloader = document.querySelector(".main__preloader");
//         preloader.classList.add("hidden");
//     }, 100); // Встановлюємо затримку в 2.5 секунди
// });






// document.addEventListener("DOMContentLoaded", function() {
//     const closeButton = document.querySelector('.close__error-sub');
//     const mainElement = document.querySelector('.main__sub');

//     closeButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         mainElement.classList.add('hidden');
//     });
// });










// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.nav__link');
//     const userLinks = document.querySelectorAll('.main__user-link');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const target = link.getAttribute('data-target');
//             showPage(target);
//             setActiveLink(link);
//         });
//     });

//     userLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             showPage('main__user');
//             setActiveLink(null);
//         });
//     });

//     function showPage(className) {
//         let pages = document.querySelectorAll('main');
//         pages.forEach(page => {
//             if (page.classList.contains(className)) {
//                 page.style.display = 'block';
//             } else {
//                 page.style.display = 'none';
//             }
//         });
//     }

//     function setActiveLink(activeLink) {
//         navLinks.forEach(link => link.classList.remove('active'));
//         if (activeLink) {
//             activeLink.classList.add('active');
//         }
//     }
// });



// document.addEventListener('DOMContentLoaded', function() {
//     // Отримання кнопок
//     var timerBtn = document.querySelector('.timer__shh');
//     var refBtn = document.querySelector('.ref__back');
//     var mainTime = document.querySelector('.main__time');

//     // Додавання обробника події для кнопки timer__shh
//     timerBtn.addEventListener('click', function() {
//         mainTime.classList.add('hidden'); // Додаємо клас, щоб сховати main__time
//     });

//     // Додавання обробника події для кнопки ref__back
//     refBtn.addEventListener('click', function() {
//         mainTime.classList.remove('hidden'); // Видаляємо клас, щоб показати main__time
//     });
// });












// const targetDate = new Date();

// targetDate.setDate(targetDate.getDate() + 0);
// targetDate.setHours(0);                         
// targetDate.setMinutes(0);                      
// targetDate.setSeconds(0);                       

// const timer = document.getElementById('timer');
// const days = document.getElementById('days');
// const hours = document.getElementById('hours');
// const minutes = document.getElementById('minutes');
// const seconds = document.getElementById('seconds');

// const mainTime = document.querySelector('.main__time');
// const mainRef = document.querySelector('.main__ref');

// function updateTime() {
//   const now = new Date();
//   const timeLeft = targetDate.getTime() - now.getTime();

//   const daysRemaining = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   const hoursRemaining = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutesRemaining = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   const secondsRemaining = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   days.textContent = `${daysRemaining}D`;
//   hours.textContent = `${hoursRemaining}h`;
//   minutes.textContent = `${minutesRemaining}m`;
//   seconds.textContent = `${secondsRemaining}s`;

//   if (timeLeft <= 0) {
//     clearInterval(intervalId);
//     mainTime.classList.add('hidden');
//     mainRef.classList.add('hidden');
//   }
// }

// const intervalId = setInterval(updateTime, 1000);






// document.addEventListener("DOMContentLoaded", function() {
//     // Отримати елементи
//     var menu = document.querySelector('.menu');
//     var mainPreloader = document.querySelector('.main__preloader');
//     var mainTime = document.querySelector('.main__time');
//     var mainRef = document.querySelector('.main__ref');
//     var mainSub = document.querySelector('.main__sub');

//     // Функція перевірки стану всіх елементів
//     function checkAllHidden() {
//         if (mainPreloader.classList.contains('hidden') &&
//             mainTime.classList.contains('hidden') &&
//             mainRef.classList.contains('hidden') &&
//             mainSub.classList.contains('hidden')) {
//             menu.style.position = 'fixed';
//         } else {
//             menu.style.position = 'relative';
//         }
//     }

//     // Створити спостерігача змін класів
//     var observer = new MutationObserver(function(mutations) {
//         mutations.forEach(function(mutation) {
//             if (mutation.attributeName === 'class') {
//                 checkAllHidden();
//             }
//         });
//     });

//     // Налаштування спостерігача
//     var config = {
//         attributes: true,
//         attributeFilter: ['class']
//     };

//     // Почати спостереження за всіма main елементами
//     observer.observe(mainPreloader, config);
//     observer.observe(mainTime, config);
//     observer.observe(mainRef, config);
//     observer.observe(mainSub, config);

//     // Перевірити стан елементів на початку
//     checkAllHidden();
// });




// document.addEventListener("DOMContentLoaded", function() {
//     Telegram.WebApp.ready();

//     const userData = Telegram.WebApp.initDataUnsafe.user;
//     let name; // оголошуємо змінну для збереження імені

//     function updateUserText(selector, text) {
//         const elements = document.querySelectorAll(selector);
//         elements.forEach(element => {
//             element.textContent = text;
//         });
//     }

//     if (userData) {
//         if (userData.username && userData.username.startsWith('@')) {
//             name = userData.username; // присвоюємо ім'я з username
//         } else if (userData.first_name) {
//             name = userData.first_name; // присвоюємо ім'я з first_name
//         } else {
//             name = 'error'; // якщо не вдалося знайти ім'я, присвоюємо 'error'
//         }

//         // оновлюємо тексти за допомогою функції updateUserText
//         updateUserText(".home__user", name);
//         updateUserText(".mining__userc", name);
//         updateUserText(".friend__userc", name);
//         updateUserText(".task__userc", name);
//         updateUserText(".home__userc", name);
//     } else {
//         name = 'error'; // якщо немає даних про користувача, присвоюємо 'error'
//         // оновлюємо тексти за допомогою функції updateUserText
//         updateUserText(".home__user", name);
//         updateUserText(".mining__userc", name);
//         updateUserText(".friend__userc", name);
//         updateUserText(".task__userc", name);
//         updateUserText(".home__userc", name);
//     }
// });


















//   // Функція для заборони виділення тексту та копіювання
//   function disableCopying() {
//     // Заборонити виділення тексту на сторінці
//     document.addEventListener('selectstart', function(e) {
//       e.preventDefault();
//     });

//     // Заборонити копіювання тексту та інших даних
//     document.addEventListener('copy', function(e) {
//       e.preventDefault();
//     });

//     // Опційно: заборонити клік правою кнопкою миші
//     document.addEventListener('contextmenu', function(e) {
//       e.preventDefault();
//     });
//   }

//   // Виклик функції після завантаження сторінки
//   window.onload = disableCopying;





//   document.addEventListener('DOMContentLoaded', () => {
//     const boostButtons = document.querySelectorAll('.mining__boost');
//     const popup = document.querySelector('.mining__popup');
//     const closeButton = document.querySelector('.mining__popup-clbtn');
//     const popupName = popup.querySelector('.mining__popup-name');
//     const popupPrice = popup.querySelector('.mining__popup-pricetxt');
//     const popupContent = popup.querySelector('.mining__popup-content'); // Якщо такого класу немає, додайте його до контейнера з вмістом попапу в HTML.

//     // Додаємо подію для кожної кнопки "Boost"
//     boostButtons.forEach(boostButton => {
//         boostButton.addEventListener('click', (event) => {
//             event.stopPropagation(); // Запобігаємо спливанню події
//             const info = boostButton.querySelector('.boost__info').textContent;
//             const price = boostButton.querySelector('.boost_price').textContent;
//             popupName.textContent = info;
//             popupPrice.textContent = price;

//             popup.classList.add('show');
//             popup.style.bottom = '-20px'; // Встановимо положення попапу
//         });
//     });

//     // Додаємо подію для кнопки закриття попапу
//     closeButton.addEventListener('click', () => {
//         closePopup();
//     });

//     // Додаємо подію для закриття попапу при кліку за його межами
//     document.addEventListener('click', (event) => {
//         if (!popup.contains(event.target)) {
//             closePopup();
//         }
//     });

//     // Функція для закриття попапу
//     function closePopup() {
//         popup.classList.remove('show');
//         popup.style.bottom = '-290px';
//     }
// });

// // Отримуємо всі кнопки friend__btn
// const btns = document.querySelectorAll('.friend__btn');
// // Отримуємо popup
// const popup = document.querySelector('.friend__popup');
// // Отримуємо елемент, в якому буде відображатися інформація про кількість запрошених друзів
// const popupInfo = document.querySelector('.friend__popup-name');
// // Отримуємо елемент, в якому буде відображатися ціна
// const popupPrice = document.querySelector('.friend__popup-pricetxt');
// // Отримуємо кнопку закриття popup
// const closeBtn = document.querySelector('.friend__popup-clbtn');

// // Додаємо обробник події для кожної кнопки
// btns.forEach(btn => {
//     btn.addEventListener('click', function(event) {
//         const actualBtn = event.target.closest('.friend__btn');
//         // Отримуємо текст з кнопки
//         const btnText = actualBtn.querySelector('.friend__btn-info').textContent;
//         // Отримуємо ціну з кнопки
//         const btnPrice = actualBtn.querySelector('.friend__btn-num').textContent;
//         // Змінюємо вміст popup в залежності від тексту кнопки
//         popupInfo.textContent = btnText;
//         // Змінюємо вміст popup в залежності від ціни кнопки
//         popupPrice.textContent = btnPrice;
//         // Відображаємо popup
//         popup.classList.add('show');
//     });
// });

// // Додаємо обробник події для кнопки закриття popup
// closeBtn.addEventListener('click', function() {
//     popup.classList.remove('show');
// });

// // Додаємо обробник події для кліка на документі
// document.addEventListener('click', function(event) {
//     if (!popup.contains(event.target) && !event.target.closest('.friend__btn')) {
//         // Закриваємо popup
//         popup.classList.remove('show');
//     }
// });






// // Отримуємо всі кнопки task__btn
// const taskBtns = document.querySelectorAll('.task__btn');
// // Отримуємо popup для завдань
// const taskPopup = document.querySelector('.task__popup');
// // Отримуємо елемент, в якому буде відображатися інформація про завдання
// const taskPopupName = document.querySelector('.task__popup-name');
// // Отримуємо елемент, в якому буде відображатися ціна
// const taskPopupPrice = document.querySelector('.task__popup-pricetxt');
// // Отримуємо кнопку закриття popup для завдань
// const taskCloseBtn = document.querySelector('.task__popup-clbtn');

// // Додаємо обробник події для кожної кнопки завдання
// taskBtns.forEach(btn => {
//     btn.addEventListener('click', function(event) {
//         const actualBtn = event.target.closest('.task__btn');
//         // Отримуємо текст з кнопки завдання
//         const btnText = actualBtn.querySelector('.btn__info').textContent;
//         // Отримуємо ціну з кнопки завдання
//         const btnPrice = actualBtn.querySelector('.task__num').textContent;
//         // Змінюємо вміст popup в залежності від тексту кнопки завдання
//         taskPopupName.textContent = btnText;
//         // Змінюємо вміст popup в залежності від ціни кнопки завдання
//         taskPopupPrice.textContent = btnPrice;
//         // Відображаємо popup для завдань
//         taskPopup.classList.add('show');
//     });
// });

// // Додаємо обробник події для кнопки закриття popup для завдань
// taskCloseBtn.addEventListener('click', function() {
//     taskPopup.classList.remove('show');
// });

// // Додаємо обробник події для кліка на документі для закриття popup для завдань
// document.addEventListener('click', function(event) {
//     // Перевіряємо, чи клік відбувся поза popup для завдань
//     if (!taskPopup.contains(event.target) && !event.target.closest('.task__btn')) {
//         // Закриваємо popup для завдань
//         taskPopup.classList.remove('show');
//     }
// });






// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('.nav__link');
//     const texts = document.querySelectorAll('.menu__list-text');

//     function setActiveLink(activeLink) {
//         links.forEach(link => {
//             const text = link.querySelector('.menu__list-text');
//             if (link === activeLink) {
//                 link.classList.add('active');
//                 text.classList.add('active');
//             } else {
//                 link.classList.remove('active');
//                 text.classList.remove('active');
//             }
//         });
//     }

//     links.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             setActiveLink(link);
//         });
//     });

//     // Set the initial active link to the "Home" button (the first link)
//     if (links.length > 0) {
//         setActiveLink(links[0]);
//     }
// });









// function formatNumber(value) {
//     if (value >= 1000000) {
//         return (value / 1000000).toFixed(1) + 'm';
//     } else if (value >= 1000) {
//         return (value / 1000).toFixed(1) + 'k';
//     }
//     return value;
// }

// document.getElementById('mainBtn').addEventListener('click', function(event) {
//     handleTap(event.clientX, event.clientY);
// });

// document.getElementById('mainBtn').addEventListener('touchstart', function(event) {
//     event.preventDefault(); // Запобігаємо стандартній обробці події
//     const touches = event.touches;
//     for (let i = 0; i < Math.min(touches.length, 3); i++) {
//         handleTap(touches[i].clientX, touches[i].clientY);
//     }
// });

// function handleTap(x, y) {
//     const floatingNumber = document.createElement('div');
//     floatingNumber.classList.add('floating-number');
//     floatingNumber.innerHTML = tapFarm;

//     document.body.appendChild(floatingNumber);

//     floatingNumber.style.left = `${x}px`;
//     floatingNumber.style.top = `${y}px`;

//     // Збільшуємо лічильник натискань
//     tapCount++;

//     // Оновлюємо баланс
//     balance += tapFarm;

//     // Оновлюємо текст балансу з використанням форматування
//     document.getElementById('balanceTxt').innerHTML = formatNumber(balance);

//     setTimeout(() => {
//         floatingNumber.remove();
//     }, 1000); // Час має відповідати тривалості анімації
// }
