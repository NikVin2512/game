'use strist';
const guessNumber = function (number) {
  // let x = 2;
  function answerNum(x) {
   function name() {
    x--;
   answer = +prompt("Угадай число от 1 до 100");
   if(answer === null){
     alert('Игра окончена');
     return false;
   }
   if (x <= 0) {
    lose();
  } 
   function lose() {
     answerMore = confirm('Попытки закончились, хотите сыграть еще?');
     if (answerMore == false) {
      alert('Игра окончена');
      return false;
    }
     if (answerMore == true) {
      answerNum(2);
     }
   }
   if (answer > number && answer !== 0) {
     alert('Загаданное число меньше, осталось попыток'+ " " + x);
     name();
   }
   if (answer < number) {
     alert('Загаданное число больше, осталось попыток'+ " " + x);
     name();
   }
   if (answer == number) {
     win();
   } 
 
   function win() {
     cont = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
 
     if (cont == false) {
       alert('Игра окончена');
       return true;
     }
     if (cont == true) {
      answerNum(2);
     }
   }
   if(isNaN(answer)){
     alert('Введи число!');
     name();
   }  
   }
   name();
 }
   
 answerNum(2);
console.log(answer);
console.log(number);
};

guessNumber(10);