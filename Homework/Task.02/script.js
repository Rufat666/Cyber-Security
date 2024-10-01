// 1.Multiply 12 with 8, and console the result:

const result = 12 * 8;
console.log(result);

// 2.Divide 10 by 2 add result to variables x, and console x:

let x = 0; 
x += 10/2;
console.log(x);

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

let num1 = 20; 
let num2 = 17; 
console.log(num1 + num2);

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

let name1 = 'Rufat'; 
let surname1 = 'Kerimov'; 
let year1 = '2002'; 

let info = name1 + ' ' + surname1 + ', ' + year1; 
console.log(info);

// 5.Console the remainder(%) when 17 is divided by 12.

console.log(17 % 12);

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again and reassign value Gence, console result.

let cityName = 'Baku'; 
console.log(cityName); 

cityName = 'Gence'; 
console.log(cityName); 

 ////////////// TASK 3 /////////////

 let name2 = 'Rufat'; 
 let surname = 'Kerimov'; 
 let year = 2002; 
 year = '2002'; 
 let city;
 let qualification = null; 
 let obj = { name: 'rufat' }; 
 let arr = ['a', 'b', 'c'];

 console.log(typeof name2); 
console.log(typeof surname); 
console.log(typeof year); 
console.log(typeof city); 
console.log(typeof qualification); 
console.log(typeof obj); 
console.log(typeof arr);

////////////// TASK 4 //////////////


const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'

var res = 0
for (i = 0; i < arr1.length; i++) {
    res += arr1[i]
    
}
console.log(res);

// 2.Add two numbers (10,88) to end of arr1 (push methods)

arr1.push(10, 88);
console.log(arr1);

// 3.Remove first two numbers from arr1

arr1.splice(0, 2);
console.log(arr1);

// 4.Add three numbers (0,9,11) in front of arr1(unshift)

arr1.unshift(0, 9, 11);
console.log(arr1);

// 5.Remove four numbe  rs in front of arr1(shift)

arr1.shift(0, 4); 
console.log(arr1);

////////////// TASK 5 //////////////


// 1.Create a object add your name, surname, age and city.

const student = {
    name: 'Rufat',     
    surname: 'Kerimov', 
    age: 25,              
    city: 'Baku'      
};

console.log(student);

// 2.Then change name to "Jhon"

const student1 = {
    name: 'Rufat',      //real name  
    surname: 'Kerimov', 
    age: 25,              
    city: 'Baku'      
};

student1.name = 'John'; //change name to John
console.log(student1); 

const user = {
    email: 'rufat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Koroghlu',
            education: {
                "uni name": "uni",
            }
        }
    }
}

// 3. Console each value of the user object

for (const key in user) {
    console.log(user[key]);
}

// 4. Console only keys of the user object

console.log(Object.keys(user));

// 5. Console only values of the user object

console.log(Object.values(user));

const mixedObject = {
    name: "Rufat",
    age: 22,
    isStudent: false,
    hobbies: null,
    year: 2002,
    address: undefined,
    surname: 'Kerimov',
    contactInfo: {
        email: "rufat@example.com",
        phone: null
    },
    scores: [98, 87, 92],
};

// 6. Log only the 'keys' whose values are of type string

console.log('String keys:');
for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'string') {
        console.log(key);
    }
}

// 7. Log only the 'keys' whose values are of type number

console.log('Number keys:');
for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'number') {
        console.log(key);
    }
}

// 8. Log only the 'keys' whose values are of type boolean

console.log('Boolean keys:');
for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'boolean') {
        console.log(key);
    }
}

// 9. Log only the 'keys' whose values are of type undefined

console.log('Undefined keys:');
for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'undefined') {
        console.log(key);
    }
}

// 10. Log only the 'keys' whose values are of type object

console.log('Object keys:');
for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'object' && mixedObject[key] !== null) {
        console.log(key);
    }
}