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
//        if (login === "kykold", passw === "1234asdQQ"){
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
//     } else if (resout < 16){
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
// } else {
//   alert('error'); 
// }

// let tues = prompt("Number");

// if (tues == 2) {
//   alert('Tuesday');
// } else {
//   alert('error'); 
// }

// let wedn = prompt("Number");

// if (wedn == 3) {
//   alert('Wednesday');
// } else {
//   alert('error'); 
// }

// let thur = prompt("Number");

// if (thur == 4) {
//   alert('Thursday');
// } else {
//   alert('error'); 
// }

// let frid = prompt("Number");

// if (frid == 5) {
//   alert('Friday');
// } else {
//   alert('error'); 
// }

// let sat = prompt("Number");

// if (sat == 6) {
//   alert('Saturday');
// } else {
//   alert('error'); 
// }

// let sun = prompt("Number");

// if (sun == 7) {
//   alert('Sunday');
// } else {
//   alert('error'); 
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

// var stop = false, age = 16;

// age > 18 ? location.assign("continue.html") : stop = true;

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

// let message = prompt("login");

// (message == 'Сотрудник') ? 
//  alert('Hello') : alert('');

//  (message == 'Директор') ? 
//  alert('Здравствуйте') : alert('');

//  (message == '') ? 
//  alert('Нет логина') : alert('');

/* 
 Задача 7 (Условный оператор)
 В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
 Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.

*/

//  let user1 = prompt("your apartmenе ?");
//  if(user1<=20){
//    alert("first house");
//   } if(user1 >=49){
//     alert("three house");
//    }
//  if(user1 >=21){
//    alert("two house");
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

let user = prompt("");
if(user == "Edge"){
  alert( "You've got the Edge!" );
} if(user === 'Chrome','Firefox','Safari','Opera'){
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}





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