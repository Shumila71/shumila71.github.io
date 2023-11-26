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




var currentPath = window.location.pathname;
// Получаем все кнопки
var buttons = document.querySelectorAll('.btn4');
// Проходимся по каждой кнопке
buttons.forEach(function(button) {
    // Получаем ссылку внутри кнопки
    var link = button.querySelector('a');
    // Если ссылка существует и ее атрибут href совпадает с текущим путем, устанавливаем фон 
    if (link && link.getAttribute('href') === currentPath.substring(0,1)){
        if (currentPath.charAt(1)==""){
            button.style.backgroundColor = '#15151b';
            button.style.scale = "1.1";
        }
    }
    else if ( link && link.getAttribute('href') === currentPath.substring(1)) {
        button.style.backgroundColor = '#15151b'; 
        button.style.scale = "1.1";
    }
});



const lib = document.querySelectorAll(".lib");
// Обходим все заголовки и добавляем для каждого слушатель события
lib.forEach(lib => {
    const header = lib.querySelector(".lib_header");
    // Находим соответствующее описание для текущего заголовка
    const description = lib.querySelector(".lib_description");
    // Слушаем событие клика на текущем заголовке
    header.addEventListener("click", () => {
        // Если описание скрыто, показываем его
        if (description.style.maxHeight === "0px" || description.style.maxHeight === "") {
            description.style.maxHeight = description.scrollHeight + "px";
        } 
        else {
            window.scrollTo(0, scrollY);
            description.style.maxHeight = "0";
        }
    });
});