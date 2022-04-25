/*  
Задача 1 (Условный оператор)
 Пользователь вводит логин и пароль.
 Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
 то выводится «Добро пожаловать». Если не совпадают –
 то «Ошибка входа»
*/

// {
//     let login = prompt('login');
//     let passw = prompt('password');
//        if (login === "kykold" && passw === "1234asdQQ"){
//            alert('Добро пожаловать');
//        }    
//        else {
//            alert('Ошибка входа')
//        }
// }

/*
Задача 2 (Условный оператор)
 Пользователь вводит год рождения. Программа показывает количество
 лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
 если нет – «вход воспрещен».
*/

// {
//     let age = prompt("Год рождения");
//     let nowEar = 2022;
//     let resout = nowEar - age;
//     alert(resout)
//     if (resout >= 16){
//         alert ('Добро пожаловать');
//     } else {
//         alert ('Вход восприщен')
//     }
// }

/*
Задача 3 (Условный оператор)
 Создайте программу, которая выводит надбавку за стаж.
 Пользователь вводит стаж работы, а программа пишет ему надбавку.
*/

//  let age = prompt('Стаж работы');

//  let message = (age <= 5) ? '1000' :
//   (age <= 10) ? 'Надбавка 4000' :
//   (age <= 20) ? 'Надбавка 7000' :
//   (age <= 30) ? 'Надбавка 10000' :
//   (age <= 40) ? 'Надбавка 20000' :
//   '20000';

// alert( message );

// let age = prompt('стаж работы')

//   if(age<=5){
//     alert('Надбавка 1000');
//   } else if(age <= 10) {
//     alert ('Надбавка 4000');
//   } else if(age <= 20) {
//     alert('Надбавка 7000');
//   } else if(age <= 30) {
//     alert('Надбавка 10000');
//   } else if(age <= 40) {
//     alert('Надбавка 20000');
//   } else { 
//     alert ('error');
//   }
  

/*
Задача (Условный оператор и свитч кейс)
 Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday')
 4.1 Решить на иф елсах
 4.2 Решить на свитч кейсе
 4.3 Решить на тернарке
*/

//4.1

// let yer = prompt("Number");

// if (yer == 1) {
//   alert('Monday');
// } 
// else if (yer == 2) {
//   alert('Tuesday');
// } 
// else if (yer == 3) {
//   alert('Wednesday');
// }
// else if (yer == 4) {
//   alert('Thursday');
// }
// else if (yer == 5) {
//   alert('Friday');
// } 
// else if (yer == 6) {
//   alert('Saturday');
// }
// else if (yer == 7) {
//   alert('Sunday');
// }  else{
//   alert("error");
// }



//4.2

// let day = prompt("Number");
//   switch(day){

//     case "1":
//         alert("Monday");
//         break;
//      case "2":
//         alert("Tuesday");
//         break;
//     case "3":
//         alert("Wednesday");
//         break;
//     case "4":
//         alert("Thursday");
//         break;
//     case "5":
//         alert("Friday");
//         break;
//     case "6":
//         alert("Saturday");
//         break;
//     case "7":
//         alert("Sunday");
//         break;

//     default:
//         alert(Error);
//         break;      
//   }

//4.3 

// let age = prompt('День');
// if (age == 1) {
//   alert('Monday');
// } else if (age == 2) {
//   alert('Tuesday');
// } else if (age == 3) {
//   alert('Wednesday');
// } else if (age == 4) {
//   alert('Thursday');
// } else if (age == 5) {
//   alert('Friday');
// }  else if (age == 6) {
//   alert('Saturday');
// } else if (age == 7) {
//   alert('Sunday');
// } else {
//   alert ("error")
// }



/* Задача 5 (Условный оператор)
 Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
 1, если значение больше нуля,
 -1, если значение меньше нуля,
 0, если значение равно нулю.
*/

// let user1 = prompt();

//  if (user1 > 0){
//      alert("1");
//  } else if(user1 < 0 ){
//      alert("-1")
//  } else{
//      alert("0")
//  }

/*
Задача 6 (Тернарный оператор)
Перепишите if..else с использованием нескольких операторов '?'.
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

//варинат 1

// let message = prompt("login");

// (message == 'Сотрудник') ? 
//  alert('Hello') : alert('');

//  (message == 'Директор') ? 
//  alert('Здравствуйте') : alert('');

//  (message == '') ? 
//  alert('Нет логина') : alert('');

//вариант 2

//  let message = prompt("login");

// if (message == 'Сотрудник'){  
//  alert('Hello');
// } else if (message == 'Директор'){ 
//  alert('Здравствуйте');
// } else { 
//  alert('Нет логина');
// }
/* 
 Задача 7 (Условный оператор)
 В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
 Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.

*/

//  let user1 = prompt("your apartmenе ?");
//  if(user1<=20){
//    alert("first house");
//   } else if (user1 >=49){
//     alert("three house");
//    }
//   else (user1 >=21); {
//    alert("two house");
//  }

// let user1 = prompt("your apartmenе ?");
//  if(user1 >=1 && user1<=20){
//    alert("first house");
//   } else if (user1 >=21 && user1<=48){
//     alert("two house");
//    }
//   else if (user1 >=49 && user1<=90); {
//    alert("three house");
//  }



//  Задача 8 (Условный оператор)
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// if(browser == 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser == 'Chrome'

//  || browser == 'Firefox'

//  || browser == 'Safari'

//  || browser == 'Opera') 
//  {
//   alert( 'Okay we support these browsers too' );

// } else {

//   alert( 'We hope that this page looks ok!' );
// }




/* 
Задача 9 (свитч кейс)
Переписать условия "if" на "switch"
важность: 4
Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/

// const number = +prompt('Введите число между 0 и 3', '');

// switch(number) {
// case 0:
//   alert('Ввели число 0');
//   break;

// case 1:
//   alert('Ввели число 1');
//   break;

// case 2:
// case 3:

//   alert('Вы ввели число 2, а может и 3');
//   break;
// }