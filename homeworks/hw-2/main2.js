//1 Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// const attem1 = ['a', 'b', 'c'];
// const attem2 = ['1', '2', '3'];
// const attem3 = attem1.concat(attem2);

// console.log(attem3);

//2 Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. (через push и через splice)

// let arr = ["a","b","c" ];

// arr.push("1","2","3");

// console.log(arr); 


// let info = ['a', 'b', 'c'];

// info.splice(2, 0, "1", "2", "3");

// console.log(info); 


//3 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let array = ["1", "2", "3", "4", "5"];

// array.splice(1, 2);

// console.log(array)

//4 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].


// let arra = ["1", "2", "3", "4", "5"];

// let arratwo =[];

// arratwo[arra["2", "3", "4"]] = 2;

// arra.splice(2, 0, "2", "3", "4");

// console.log(arratwo); 



//5 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let ar = ["1", "2", "3", "4", "5"];

// ar.splice(3, 0, "a", "b", "c");

// console.log( ar ); 

//6 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arey = [1, 2, 3, 4, 5];

// arey.splice(1, 0, "a", "b");
// arey.splice(6, 0, "c");
// arey.splice(8, 0, "e");

// arey.lenght; 



//7 Дан массив [1, 2, 3, 'banan', 4, 5]. Вывести индекс элемента 'banan'. Вывести элемент 'banan' по его индексу
 
// let at = [1, 2, 3, 'banan', 4, 5];

// const index = at.indexOf('banan');
// console.log(at[3]);

// console.log(index)


//8  Дан массив [1, 2, 3, 'banan', 4, 5]. Заменить строку 'banan' на 'my banan!'. (через splice и через индекс)


// let bet = [1, 2, 3, 'banan', 4, 5];

// bet.splice(3, 1, "my banan!");

// console.log(bet) 

// bet[3] = "my banan!"

// console.log(bet)


//9) Дан массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Вывести через цикл произведение каждого числа на 3. (через for и через for in и через for of)


// let iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let value of iterable) {
//   value *= 3;
//   console.log(value);
// }

// let iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let value in iterable) {
//   value *= 3;
//   console.log(value);
// }

// let numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  for(let i = 0; i < numbers.length; i++ )
//  {
//      console.log(numbers[i] * 3);
//  }



//10 Дан массив [3, 5, 2, 7, 6, 10, 33]. Отсортировать массив через метод sort.

// let scor = [3, 5, 2, 7, 6, 10, 33];

// scor.sort(); 

// console.log(scor)

//11 Дан массив [3, 5, 2, 7, 6, 10, 33]. Вывести задом на перед массив через метод reverse.

// let number = [3, 5, 2, 7, 6, 10, 33]

// a = number.reverse() 

// console.log(number)

//12 Дан массив const arr = [1, 2, 3, 4, 5]. Создать новый пустой массив arr1. Обойти массив arr через цикл for, каждый элемент массива arr умножить на 10 и результат положить в массив arr1.


const arre1 = []

const arre = [1, 2, 3, 4, 5]

for(let i = 0; i < arre.length; i++ )
 {
     console.log(arre[i] * 10);

     arre1.push (arre);
 }



// console.log(arre1);

//13 Дана строка 'Hello, I java script! I love JS!'. Заменить все слова 'I' на 'my dog'.

// let words = /I/g;

// let str = 'Hello, I java script! I love JS!';

// let change = str.replace(words, 'my dog ');

// console.log(change); 


//14) Дана строка 'Hello, I java script! I love JS!'. Вывести часть строки 'Hello, I java script!' через slice.


// let str = 'Hello, I java script! I love JS!';

// let arr = str.split(' ');

// console.log(arr.slice(0,4))
