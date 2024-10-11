//const numbers = [9,5,3,11,12,33,22,9,10,0,8]

//numbers.reverse()
//console.log (numbers);

//numbers.sort((a, b) => a - b);
//console.log(numbers);

 //numbers.sort((a, b) => b - a);
//console.log(numbers);

//let result = numbers.splice(3,4)
//console.log(numbers);

const numbers = [9,5,3,11,12,33,22,9,11,10,0,8]
const list = ['6', '3',true, 'a', undefined,false,10,11,5]
const list2 = ['a', ['f'],7,['d',[false]]]

//1
const result = numbers.some((item) => item > 2)
console.log(result);  

//2
const reesult = numbers.every((item) => item > 2)
console.log(reesult); 

//3
const flat = list2.flat(1)
console.log(flat);

//4
const flt = list2.flat(Infinity)
console.log(flt);

//5
 const red = numbers.reduce((acc, item) => acc + item, 0)
console.log(red);

//6
const listt = ((acc, item) => typeof list === number ? acc + item , 0 )
console.log(listt);



