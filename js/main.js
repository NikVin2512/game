const guessNumber = function (number) {
  function answerNum() {
   answer = +prompt("Угадай число от 1 до 100");
   if(answer == 0){
     alert('Игра окончена');
     return false;
   }
   if (answer > number) {
     alert('Загаданное число меньше');
     answerNum();
   }
   if (answer < number) {
     alert('Загаданное число больше');
     answerNum();
   }
   if (answer == number) {
    alert('Поздравляю, Вы угадали!!!');
    return false;
   } 
 
   if(isNaN(answer)){
     alert('Введи число!');
     answerNum();
   }  
 }
   
 answerNum();
console.log(answer);
console.log(number);
};

guessNumber(10);