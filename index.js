// function getSum(a, b) {
//     return (a + b);
// }

// console.log(getSum(1,5));

// let getFulName = function (name, firstname) {
//     return (name + ' ' + firstname);
// }
// console.log(getFulName('Anna', 'Smirnova'));


// let getNum = (num) => num * num;

// console.log(getNum(5));

// function getWis(name = "Гість!") {
//     alert(`Привіт, ${name}!`);
// }

// getWis('Dima');

// function getSum(a, b, c, ...arguments) {
//     let sumArr = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sumArr += arguments[i];
//     }
//     return(a + b + c + sumArr);
// }
// console.log(getSum(1, 5, 6, 7, 3, 6, 7 ,8));

// Зробити , дописати цикл в функцію фор і, з допомогою цикла перебрати аргументи і знайти суму .

// Написати функцію яка буде приймати строку, строка може бути будь якої довжини (перевірити голосні букви Українські )
// , і порахувати скільки було голосних букв і порахувати кількість і повернути з функції.
// Приклад getTotalVawl("Україна поле гай") - результат 6

// function getSumVowels(text) {
//     let lowText = text.toLowerCase();
//     let vowel = 'аеєиіїоуюя';
//     let indSum = 0;
//     for (let i = 0; i < lowText.length; i++) {
//         if (vowel.indexOf(lowText[i]) !== -1) {
//             indSum += 1;
//         }      
//     }
//     return indSum;
// }

// console.log(getSumVowels("Україна, Рідний край, Поле, річка, Синій гай. Любо стежкою іти – Тут живемо Я і ТИ!"));


// написати функцію яка приймає в себе дава параметра перший пар.строка, дуругий шматок тексту ,
// Функція має перевірити чи містеться в строці(перший парамитр)
// той текст який переданий другим парамитром, якщо так то в консоль лог вивести текст знайдено, якщо ні такого тексту немаю.

function getText(text, word) {
    
    if (text.includes(word)) {
        console.log('Текст знайдено!');
    } else {
        console.log('Текст не знайдено!');
    }
    // 'Hello World!!!'.includes('World', 'H');

}

getText('Україна, Рідний край, Поле, річка, Синій гай.', 'річка');

// повторити попередню тему! typeof().
// Повторити масиви, пуш поп. шівт аншіфт.як дістати елемент з масива, заміни.елем. Метод Фор.итч. мап.
// закинути в гіт та створити на наступний урок файли.