// Задание 1
console.log('Задание 1');

for (let a1 = 1; a1 <= 50; a1++) {
    console.log(a1);
}

for (let b1 = 35; b1 >= 8; b1--) {
    console.log(b1);
}

// Задание 2
console.log('Задание 2');

let a2 = 89;
while (a2 >= 11) {
    document.write(a2 + '<br/>');
    a2--;
}

// Задание 3
console.log('Задание 3');

let a3 = 100;
    sum = 0;

for (let i = 1; i <= a3; i++) {
    sum += i;
    console.log(sum);
}

// Задание 4
console.log('Задание 4');

let a4 = 5;
let sum4 = 0;

for (let i4 = 1; i4 <= a4; i4++) {
    sum4 = 0;

    for (let j4 = 1; j4 <= i4; j4++) {
        sum4 += j4;
    }

    console.log('В числе ' + i4 + ' сумма составляет ' + sum4);
}

// Задание 5
console.log('Задание 5');

for(let b5 = 8; b5 <= 56; b5++) {
    if (b5 % 2 == 1) continue

    console.log(b5);
}

// Задание 6
console.log('Задание 6');

for (let a6 = 2; a6 <= 10; a6++) {
    sum6 = 0;

    for (let b6 = 1; b6 <= 10; b6++) {
        sum6 = a6 * b6;
        document.write(a6 + '*' + b6 + '=' + sum6 +'<br/>');
    }

}

// Задание 7
console.log('Задание 7');

let n = 1000;
    num = 0;

while (n > 50) {
    num++;
	n = n / 2;
    console.log(n, num);
}

//Задания 8, 9, 10 сама не смогла сделать, пересмотрю в видео-записях как нужно было