let fruit = "Mango";

console.log(fruit);
console.log(typeof(fruit));

let fruits = ["Mango", "Banana", "Apple", "Cherry"];

console.log(fruits);

console.log(fruits[2]);
console.log(fruits[7]);

console.log(fruits.length);

fruits[1] = "Avacado";
console.log(fruits);

//Add element at the end of the array
fruits.push("Dewberry");
console.log(fruits);

//Add element at the start of the array
fruits.unshift("Banana");
console.log(fruits);

//Remove element at the end of array
fruits.pop();
console.log(fruits);

//Remove element at the start of the array
fruits.shift();
console.log(fruits);

//Sort array
fruits.sort();
console.log(fruits);

//Invert array
fruits.reverse();
console.log(fruits);

//Get index of a string
let index = fruits.indexOf("Avacado");
console.log("Index:", index);

//Check if string is included
console.log("Included?",fruits.includes("Apple"));

//Join elements
console.log(fruits.join("-"));

//Get partial elements
//let sliced_fruits = fruits.slice(1,3);
//console.log(sliced_fruits);

//Splicing? Inverse-slice
//fruits.splice(0,2);
//console.log(fruits);

//Iterate through array
fruits.forEach(function(a) {
    console.log(a);
})

//For loop to iterate
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//For loop reverse iterate
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

//Shorter iteration for
for (fruit of fruits){
    console.log(fruit);
}