// There are two ways to create Array

//Object

const obj1 = new Object()
const obj2 = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
    arr2: [1,2,3,4,5,6]
}

//Array

const arr1 = new Array ()
const arr2 = ['Sabir', 'Nihat', 'Gunel', 'Fidan']

console.log(arr2[2]);
console.log(arr2.flat(2));

console.log(arr2.at(-2));
console.log(arr2[arr2.length -2]);

for ( let i = 0; i < arr2.length; i++) {
 if (arr2[i].startsWith('S')) {
    console.log(arr2[i]);
 }
    
}

console.log(' ');

// Task Classwork

const nums = [4,5,7,8,10,33]

//let sum = 0
//for (let i = 0; i < nums.length; i++) {
//    sum *= nums[i]
//}
//console.log('sum', sum)

for ( let i = 0; i < 4;  i++) {
    console.log(nums[i]) 
    
}


// map, filter,sort,reverse, slice, findIndex

const list = [4, ,'',5,7,8,10,33,0,'Rufat',true,undefined,null,false]

//const nums2 = [4,5,7,8,10,33]
//let result = nums2.map(item => item *5)

let onlyNumbers = list.filter(item => typeof item === 'undefined')
console.log('onlyNumbers', onlyNumbers);

let onlyNumbers1 = list.filter(item => item)
console.log('onlyNumbers1', onlyNumbers1);

const users = [
   { id: 1,
    name: 'Rufat',
    gender: 'male',
    age: 22
   },
   {
    id: 2,
    name: 'Nihat',
    gender: 'male',
    age: 23
   },
   {
    id: 3,
    name: 'Fatime',
    gender: 'female',
    age: 22
   },
   {
    id: 4,
    name: 'Gunel',
    gender: 'female',
    age: 27
   },
   {
    id: 5,
    name: 'Xanlar',
    gender: 'male',
    age: 29
   },
]

// 1
let sum = 0
let result1 = users.map(item => sum += item.age)
console.log('result', result1)

// 2
const result = users.filter(item => item.gender === 'female')
console.log('result', result)

// 3
let result2 = users.filter(item => item.age > 25 )
console.log('result', result2)

//4
let result3 = users.map(item => item.age *10)
console.log('result', result3)

 
