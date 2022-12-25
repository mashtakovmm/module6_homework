// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны.
// Обратите внимание на числа 0 и 1.

function isPrime(number) {
        if (number>1000) {
            console.log("Данные неверны");
            return
        }
        // Zero is neither a prime nor a composite number
        if (number==1 || number==0) {
          return false;
        }
        else if(number == 2) {
          return true;
        }else{
          for(var x = 2; x < number; x++) {
            if(number % x == 0) {
              return false;
            }
          }
          return true;  
        }
}