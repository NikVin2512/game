
const hello = document.getElementById('hello');
const toDay = document.getElementById('today');
const time = document.getElementById('time');
const newYear = document.getElementById('new-year');
let deadline = '1 january 2023';

let date = new Date();
const weekday = new Array('Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота');
let dateStop = new Date(deadline).getTime();
let dataNow = new Date().getTime();
let timeRemaining = Math.floor(((dateStop - dataNow) / 1000) / 60 / 60 / 24);



const hour = new Date().getHours();
let greeting;
if (hour >= 5 && hour < 12)
    greeting = "Доброе утро";
else if (hour >= 12 && hour < 18)
    greeting = "Добрый день";
else if (hour >= 18 && hour < 24)
    greeting = "Добрый вечер";
else if (hour >= 0 && hour < 5)
    greeting = "Доброй ночи";

hello.textContent = greeting;
toDay.textContent = weekday[date.getDay()];
time.textContent = date.toLocaleTimeString("en-EN");
newYear.textContent = timeRemaining + ' ' + 'дней';