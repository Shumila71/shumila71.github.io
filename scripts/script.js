var menuToggle = document.getElementById('menu-toggle');
var header = document.querySelector('header');
menuToggle.addEventListener('change', function() {
    if (menuToggle.checked) {
        header.style.position = 'fixed';
        header.style.width = '97%';
    } else {
        header.style.position = 'relative';
        header.style.width = '';
    }
});

function navigateTo(url) {
    window.location.href = url;
}

// Получаем все кнопки с классом "btn4"
var buttons = document.querySelectorAll('.btn4');

// Перебираем каждую кнопку и добавляем обработчик события
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var link = this.querySelector('a');

        // Проверяем, есть ли у элемента атрибут "href"
        if (link && link.hasAttribute('href')) {
            // Получаем URL из атрибута "href" и переходим на указанный URL
            var url = link.getAttribute('href');
            navigateTo(url);
        }
    });
});