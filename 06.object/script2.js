// Object


//console.log(student);

//There are two ways to create object
const obj1 = {} //literal
const obj2 = new Object() //constructor


const student = { 
    firstname: 'Rufat' ,
    lastname: 'Kerimov' ,
    'father-name': 'Sexavet' ,
    99: 22 ,
    year: 2002 , 
    uni: 'uni' ,
    isAdmin: 'true' ,
    fin: 'undefined' ,
    tax: 'null' ,
    address: {
       city: 'Baku' ,
       country: 'Azerbaijan',
       street: 'Korghlu' 
    } ,
    email: 'rufatsk@code.edu.az'
}

student.salary = '1000'
console.log('student', student)
student.hobby = {}
student.hobby.info = 'play football'


console.log(student.firstname);
console.log(student.lastname);
console.log(student[99]);
console.log(student["father-name"]);
console.log(student.year);
console.log(student.uni);
console.log(student.isAdmin);
console.log(student.fin);
console.log(student.tax);
console.log(student.address.city);
console.log(student.address.country);
console.log(student.address.street);
console.log(student.email);

for ( let key in student) {
    console.log(key)
}

for ( let key in student) {
    console.log(student[key]);
}

console.log(Object.values(student));

console.log(student);

// console.log(Object.keys(student));
// console.log(Object.values(student));

//for (let key in student) { 
//console.log(key, ':', student[key]) 
//}

//let a = 4
//let b = 4
//console.log('primitive', a === b);

// constobj1 = {
//name = 'Rufat'   
//}

// constobj2 = {
//name = 'Nihat'
//}

//constobj1 = {}
//constobj2 = {}
//console.log('non-primitive', obj1 === obj2)
//console.log({} = {})


{
    let a = 7
    console.log('inner', a)
}

console.log('outer', a);


{
    const a = 50
    console.log('inner', a)
}

console.log('outer', a);


{
    var a = 10
    console.log('inner', a)
}

console.log('outer', a)