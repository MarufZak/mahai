// ФУНКЦИИ
// функции - выполняют участок кода там где вы ее вызовете фунцию 
// создание функции называется - объявлением
// объявляется с помощью function
// function имя функции( параметры ) { выполлняемый код }

// function name() {
//     let sum = 5+10;
//     console.log(sum);
// }

// имяФункции() - вызов фунции на выполнение кода
// name();

// return - останавливает функцию и возвращает то что написано после дерективы
// function name() {
//     let sum = 5+10;
//     return sum;
// }
// let x = name();
// console.log(name());

// При объявлении функции в круглых скобках пишутся параметры
// количество параметров не ограничено
// параметры могут принимать любое значение
// 
// function name(a , b) {
//     let sum = a + b;
//     return sum;
// }
// let x = name(6 , 8)
// console.log(x);
// let y = name(10 , 18)
// console.log(y);

// параметры могут иметь значение по умолчанию，они сработают если при вызове не передавать аргументы
// function sum(a=10 , b=10) {
//     let sum = a + b;
//     return sum;
// }
// let x = sum(5,6)
// let y = sum(5)
// console.log(sum(x,y));

// Match - это работа с математикой
// let x = 3.25
// console.log(Math.floor(x)); // округляет значение в меньшую сторону
// console.log(Math.ceil(x));  // округляет значение в больщую сторону 
// console.log(Math.round(x)); // округляет значение согласно математическим правилам */

// math.random() - возвращает случайное число от 0 до 1 ( не включая значение “1” )
// for (let i = 0; i < 10; i++) {
//     let x =(Math.floor(Math.random()*21));
//     console.log(x);
// }]

// // Math.random()
// for (let i = 0; i < 10; i++) {
    // let x =(Math.floor(Math.random()*23 + 7));
//     console.log(x);
// }

// function rand(max = 10, min = 0) {
//     let random = Math.floor(Math.random() * (max + 1 - min) + min )
//     return random
// }

// for (let i = 0; i < 10; i++) {
//     console.log(rand(20,5));
    
// }






for (let i = 0; i < 3; i++) {
    let a = Math.floor(Math.random()*10 + 1)
    let b = Math.floor(Math.random()*10 + 1)
    console.log(a);
    alert(a) 
    console.log(b);
    alert(b) 
}