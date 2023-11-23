var welcomeText = document.getElementById("welcomeText");
var greetings = ["Готовы к новому квесту?","Приготовьтесь к игровым открытиям.","У нас интересно, оставайтесь с нами!","Добро пожаловать в мир игр и консолей."];

var currentIndex = 0;

async function displayAndErase(word) {
    await displayWord(word);
    await sleep(4000); // Подождать 5 секунд перед стиранием слова
    await eraseWord();
}

async function displayWord(word) {
    for (var i = 0; i <= word.length; i++) {
        welcomeText.textContent = word.substring(0, i);
        await sleep(55); // Интервал задержки между буквами (в миллисекундах)
    }
}

async function eraseWord() {
    for (var i = welcomeText.textContent.length; i >= 0; i--) {
        welcomeText.textContent = welcomeText.textContent.substring(0, i);
        await sleep(25); // Интервал задержки между стиранием букв (в миллисекундах)
    }
    currentIndex = (currentIndex + 1) % greetings.length;
    displayAndErase(greetings[currentIndex]);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

displayAndErase(greetings[currentIndex]);