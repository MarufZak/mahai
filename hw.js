// function total(a , b) {
//     let total = a - b;
//     return total 
// }

// var name = prompt('введите свое имя')


// do {
//     var year = +prompt('введите нынешний год')
// } while ( isNaN(year));

// do {
//     var birth = +prompt('введите год своего рождения')   
// } while (isNaN(birth));

// console.log('Имя '+ name + ', год рождения '+ birth+ ', нынешний год '+year);

// console.log(name+', ваш возраст ' + total(year,birth));







// Задание: (Рондомные примеры)
//             Пользователь вводит количество решаемых им примеров
//             И функции Пользователю отдает рандомные числа и рандомные знаки для решаемых примеров
//             После примера отдается сообщение:
//                 Ваш ответ верный - 2 
//                     или
//                 Ваш ответ не верный - 2! Правильный ответ - 3!





do {
    var amount = prompt('请输入例子的数量')
} while (isNaN(amount));

// for (let i = 0; i < amount; i++) {
    
// console.log(a());
// console.log(b());
// console.log(c());
    
// }



// /* for (let i = 0; i < 2; i++) {
//     console.log(a+b);
//     alert(a+b)
    
// } */

for (let i = 0; i < amount; i++) {   

    let a = (Math.floor((Math.random() * 10))) 
    let b = (Math.floor((Math.random() * 10)))  
    let c =  (Math.ceil((Math.random() * 4)))


    if (c == 1) {
        var ansA = prompt('输入答案 ' + a + ' + ' + b )
        if (a+b==ansA) {
            alert('您答对了 = '+(a + b));
        }else{
            alert('您答错了, 答案是 = '+(a + b));
        }
    } else if (c==2) {
        var ansB = prompt('输入答案 ' + a + ' - ' + b )
        if (a-b==ansB) {
            alert('您答对了 = '+(a - b));
        }else{
            alert('您答错了, 答案是 = '+(a - b));
        }
    } else if(c==3){
            var ansC = prompt('输入答案 ' + a + ' / ' + b )
            if (a/b==ansC) {
                alert('您答对了 = '+(a / b));
            }else{
                alert('您答错了, 答案是 = '+(a / b));
            }
        
    } else {
            var ansD = prompt('输入答案 ' + a + ' * ' + b )
            if (a*b==ansD) {
                alert('您答对了 = '+(a * b));
            }else{
                alert('您答错了, 答案是 = '+(a * b));
            }
    }
    
}






