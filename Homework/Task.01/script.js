// 1.Create a string, number, boolean, undefined, null, symbol, and bigint variable.

let mystring ='Rufat'
let mynumber = 25
let myboolean = true
let myundefined = undefined
let mynull = null
let mysymbol = Symbol ("hello")
let mybigint = 123459808643n

// 2.Print each variable type using typeof.

console.log(typeof mystring)
console.log(typeof mynumber)
console.log(typeof myboolean)
console.log(typeof myundefined)
console.log(typeof mynull)
console.log(typeof mysymbol)
console.log(typeof mybigint)

// 3.Use let, const, and var to declare variables and explain their differences with examples.//

let city ='Baku'
city ='Baku'
console.log(city)

// const country ='Azerbaijan'
// country ='Russia'
// console.log(country);

var job ='IT'
job1 ='Cyber'
console.log(job)

//let: allows reassignment.
//const: does not allow reassignment.
//var: allows reassignment.

// 4.Use backticks to create a dynamic meessage that includes (firstName,lastName,age,country,hobby,occupation) variables.

let firstname = 'Rufat' 
let surname = 'Kerimov' 
let age = '22'
let country = 'Azerbaijan' 
let hobby = 'Football' 
let occupation = 'CyberSecurity Specialist'

console.log(`Hello my name is ${firstname} ${surname}. I am ${age} years old, from ${country}. I enjoy ${hobby} and work as a ${occupation}.`) ;

// 5.Use arithmetic operators (+, -, *, /, %)

let x = 10
let y = 15

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

// 6.Use comparison operators (==, ===, >, <, etc.)$

let r = 10
let u = 5
let n = "10"

// 6.Use comparison operators (==, ===, >, <, etc.)

console.log(r == n);
console.log(r === n);
console.log(n > u);
console.log(u < r);
console.log(n >= u);
console.log(u <= r);

// 7.Use logical operators (&&, ||, !).

let a = true
let b = false
let c = 20
let d = 30

console.log(a && b);
console.log(c > 5 && d > 20);
console.log(a || b);
console.log(c > 25 || d < 20);
console.log(!a);
console.log(!b);