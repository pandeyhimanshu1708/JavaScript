// let arr = [];
// console.log(typeof arr);

// let arr1 = [1,2,3,4];
// console.log(length.arr1);

// creating arrays, using Array consturctor

// let fruits = new Array ("Apple", "Banana", "abc");
// console.log(fruits);

// using array literals
// let fruits = ["Apple", "Banana", "abc"];
// console.log(fruits);


// Access element

// let fruits = ["Apple", "Banana", "abc"];
// console.log(fruits.at(-4));
// console.log(fruits[2]);

// modifying the element

// fruits[2] = "Orange";
// console.log(fruits);

// array traversal
// for of loop
let fruits = ["apple","abc","banana"];
for (let fruit of fruits) {
    console.log(fruit);
    }

    for(let item=0;item<fruits.length;item++){
        console.log(fruits[item]);
        
    }


    for (let fruit in fruits) {
        console.log(fruit);
        }
// for in loop is used to get the index of the array element
// but it also includes the index of the prototype of the array
// so we use hasOwnProperty to exclude the prototype index
console.log(fruits.hasOwnProperty("0"));

// foreach method

// let fruit = ["apple","abc","banana"];
// fruit.forEach(function(fruit){
//     console.log(fruit);
// });

// map method
// let fruit = ["apple","abc","banana"];

// fruit.map(curElem,index,fruit) => {
//     console.log(curElem);
// }

// ho to add, insert, delete operation in array
// add element at the end of the array

// push method
let fruitss = ["apple","abc","banana"];
fruitss.push("orange");
console.log(fruitss);  

// add element at the beginning of the array
// unshift method
fruitss.unshift("grapes");
console.log(fruitss);


// insert element at a specific position in the array
// splice method
fruitss.splice(2,0,"mango");
console.log(fruitss);

// delete element from the array
// splice method
fruitss.splice(2,1);    
console.log(fruitss);

// delete element from the array using delete method
// delete method is used to delete the property of the object
// but it can be used to delete the element from the array
// but it will delete the first occurrence of the element in the array
delete fruitss[2];
console.log(fruitss);
// delete element from the array using filter method
// filter method is used to filter the array elements


// search method
// indexOf()


const numbers = [1,2,3,4,5,6,7,8,9];
const index = numbers.indexOf(5);
console.log(index);


// includes() => give true or false

const number = [1,2,3,4,5,6,7,8,9];
let inc = number.includes(2);
console.log(inc);