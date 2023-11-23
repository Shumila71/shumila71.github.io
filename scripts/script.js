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