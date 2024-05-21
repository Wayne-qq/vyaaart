
// Анімація слова Token прелоадер

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





// Код для приховування прелоадера через 3 секунди
window.addEventListener('load', function() {
    // Виконуємо через 3 секунди після завантаження сторінки
    setTimeout(function() {
        // Знаходимо елемент з класом 'main__preloader'
        const preloader = document.querySelector('.main__preloader');
        if (preloader) {
            // Додаємо клас 'hidden' щоб зробити його невидимим
            preloader.classList.add('hidden');
            checkHiddenElements(); // Перевіряємо, чи обидва елементи приховані
        }
    }, 3000); // 3000 мілісекунд = 3 секунди
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#main__sub a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Запобігаємо переходу за посиланням
            const sub = document.getElementById('main__sub');
            if (sub) {
                sub.classList.add('hidden');
                checkHiddenElements(); // Перевіряємо, чи обидва елементи приховані
            }
        });
    });
});

function checkHiddenElements() {
    const preloader = document.querySelector('.main__preloader');
    const sub = document.querySelector('#main__sub');
    const menu = document.querySelector('.menu');

    if (preloader && sub && menu) {
        if (preloader.classList.contains('hidden') && sub.classList.contains('hidden')) {
            menu.style.position = 'fixed';
        }
    }
}


