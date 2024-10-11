////////////// TASK 1 //////////////

const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]


// 1.Sum all the numbers in 'arr1'
const sum = arr1.reduce((acc, item) => acc + item, 0);
console.log(sum);

// 2.Add two numbers (10,88) to end of arr1 (push methods)
arr1.push(10, 88);
console.log(arr1);

// 3.Remove first two numbers from arr1
arr1.splice(0, 2);
console.log(arr1);

// 4.Add three numbers (0,9,11) in front of arr1(unshift)
arr1.unshift(0, 9, 11);
console.log(arr1);

// 5.Remove four numbers in front of arr1(shift)
for (let i = 0; i < 4; i++) {
    arr1.shift();
}
console.log(arr1);


////////////// TASK 2 //////////////

 const arr2 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel',"Fatime", "Cavid", 'Ramin', "Ali", "Polad"]

 
// 1.Console values from "Rufet" to "Ali"
const startIndex = arr2.indexOf("Rufet");
const endIndex = arr2.indexOf("Ali");

const result = arr2.slice(startIndex, endIndex + 1);
console.log(result);

// 2.Change Mehman to Fidan
const index = arr2.indexOf("Mehman");

// Change "Mehman" to "Fidan"
if (index !== -1) {
    arr2[index] = "Fidan";
}
console.log(arr2);

// 3.Console each name with map
arr2.map(name => console.log(name));

// 4.Console only names which is Fatime
arr2.filter(name => name === "Fatime").forEach(name => console.log(name));

// 5.Console all names where name is Gunel, then change it to "Nihad"
arr2.forEach((name, index) => {
    if (name === "Gunel") {
        console.log(name); 
        arr2[index] = "Nihad"; 
    }
});
console.log(arr2); 

// 6.Console last second value of arr2
const secondlastvalue = arr2[arr2.length - 2];
console.log(secondlastvalue);

// 7.Console length of arr2
console.log(arr2.length);


////////////// TASK 3 //////////////

const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]


// 1.Show only numbers
const number = arr3.filter(item => typeof item === 'number');
console.log('Number', number);

// 2.Show only true values
const truetr = arr3.filter(item => item === true);
console.log('Truetr', truetr);

// 3.Show only false values
const falsefl = arr3.filter(item => item === false);
console.log('Falsefl', falsefl)

// 4.Show only strings
const strings = arr3.filter(item => typeof item === 'string');
console.log('Strings', strings);


////////////// TASK 4 //////////////

const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]


// 1.Console (only even numbers)
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers', evenNumbers);

// 2.Console (only odd numbers)
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log('Odd Numbers', oddNumbers);


////////////// TASK 5 //////////////

const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]


// 1.Console all values of arr4 if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]



// 2.Sum all numbers of arr4
const sum1 = arr4.filter(value => typeof value === 'number').reduce((acc, num) => acc + num, 0);
console.log('Sum1', sum1);

// 3.Count only the values that are true
const count = arr4.filter(value => value === true).length;
console.log('Count', count);

// 4.Count only the values that are string
const countStr = arr4.filter(value => typeof value === 'string').length;
console.log('CountStr', countStr);

// 5.Count only the values that are false
const countFal = arr4.filter(value => value === false).length;
console.log('CountFal', countFal);


////////////// TASK 6 //////////////


// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
let namee = 'Rufat Kerimov Sexavet';
let arrr1 = namee.split('');
console.log(arrr1);

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
let nameArr = namee.split(' '); 
let firstName = nameArr[0]; 
let lastName = nameArr[1]; 
let fathName = nameArr.slice(2).join(' '); 


let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....
//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
let five = arr.filter(num => num === 5).length;
console.log( five);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let sumOfAll = arr.reduce((acc, num) => acc + num, 0);
console.log( sumOfAll);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
let uniqueNum = [...new Set(arr)];
let sortedNum = uniqueNum.sort((a, b) => a - b);
console.log( sortedNum);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
let maxNum = Math.max(...arr);
let countOfMaxNum = arr.filter(num => num === maxNum).length;
console.log( maxNum,  countOfMaxNum);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
let name1 = "Rufat";
let letterCount = name1.length;
let isInArr = arr.includes(letterCount);
console.log( ` ${letterCount} `,   isInArr);

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
let remaindtwo = arr.find(num => num % 3 === 2);
let indexOfRemaindtwo = arr.indexOf(remaindtwo);
console.log( remaindtwo,  indexOfRemaindtwo);

//10) arraydaki en boyuk reqemin ilk indexini tapin
let firstIndexOfMax = arr.indexOf(maxNum);
console.log(firstIndexOfMax);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
let indicesOfFour = [];
arr.forEach((num, index) => {
    if (num === 4) indicesOfFour.push(index);
});
console.log( indicesOfFour);


//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
let firstIndexFive = arr.indexOf(5);
let lastIndexFive = arr.lastIndexOf(5);
console.log( lastIndexFive,  firstIndexFive);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
let newArr = arr.filter(num => num > 2);
let lengthDiff = arr.length - newArr.length;
console.log( newArr, lengthDiff);
//14) 7 reqeminin indexleri cemini tapin.
let Seven = 0;
arr.forEach((num, index) => {
    if (num === 7) Seven += index;
});
console.log( Seven);

////////////// TASK 7 //////////////

