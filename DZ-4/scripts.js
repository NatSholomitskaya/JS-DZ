// Задание 1

let arr1 = [1, 2, 3, 4, 5];
for (i = 0; i < arr1.length; i++) {
    document.write(arr1[i] + '<br>');
}
// Задание 2

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < -3 && arr2[i] > -10) {
        document.write(arr2[i] + '<br>');
    }
}

// Задание 3
let arr3 = [];
for(let i = 23; i <= 57; i++){
    arr3.push(i);
}
console.log(arr3);

let j = 23;
let arr32 = [];

while(j <= 57) {
    arr32.push(j);
    j++;
}
console.log(arr32);

let result = 0;
for(x = 0; x < arr3.length; x++) {
    result += arr3[x];
}
console.log(result);

// Задание 4

let arr4 = ['15', '23', '38', '56', '274', '1784'];
for (let i = 0; i  < arr4.length; i++) {
    let numb = String(arr4[i]);
    if (numb[0] == 1 || numb[0] == 2 || numb[0] == 5) {
        console.log(numb);
    }
}

// Задание 5
let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for(let i = 0; i < days.length; i++) {
    if (i == 5 || i == 6) {
        document.write('<b>' + days[i] + '</b> <br>');
    } else {
        document.write(days[i] + '<br>');
    }
}

// Задание 6

let arr6 = ['Яблоко', 'Понедельник', 2845, true, -5];
arr6.push('Вишня');
let lastElem = arr6[arr6.length - 1];
console.log(lastElem);

// Задание 7

let arr7 = [];
chees = true;
while(chees) {
    let qwest = prompt('Введите число');
    if(qwest === '') {
        chees = false;
    } else {
    arr7.push(qwest);
    }
}
document.write(arr7);
arr7.sort();
console.log(arr7);

// Задание 8

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
while(arr8) {
    arr8.reverse();
    document.write('<br>' + arr8);
    break;
}

// Задание 9

let arr9 = [5, 9, 21,,, 9, 78,,,, 6];
    emptyElems = 0;
for (let i = 0; i < arr9.length; i++) {
    emptyElems += (arr9[i] === undefined) ? 1 : 0;
}
console.log(emptyElems);

// Задание  10

let arr10 = [3, 7, 2, 48, 0, 24, 38, 8, 13, 0, 18, 27];
    firstArr10 = arr10.indexOf(0);
    lastArr10 = arr10.lastIndexOf(0);
    sum10 = 0;
while (firstArr10 <= lastArr10) {
    sum10 += arr10[firstArr10];
    firstArr10++;
}
console.log(sum10);