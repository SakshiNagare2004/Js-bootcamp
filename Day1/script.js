// Assignment 1: Array Operations
// Create an empty array called "fruits"
let fruits = [];

//  Add the following fruits to the "fruits" 
// array: "apple", "banana", "orange".
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

// Remove the first fruit from the array.
fruits.splice(0, 1);

// Add "grape" to the end of the array.
fruits.push("grape");

//  Update the second fruit in the array to "pear".
fruits.splice(1, 1, "pear");

// Print the final "fruits" array after performing the above operations.
console.log(fruits)


// Assignment 2: Object Operations
// Create an empty object called "person".
let person = {}

// Add the following properties to the "person" object
person.name = "John"
person.age = 30
person.city = "New York"

// Remove the "age" property from the "person" object.
delete person.age;

// Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Engineer";

// Update the "city" property of the "person" object to "San Francisco"
person.city = "San Francisco";

// Print the final "person" object after performing the above operations.
console.log(person);




// Assignment 3: Array of Objects Operations
// Create an empty array called "cars".
let cars = [];

// Add three car objects to the "cars" array. 
// Each car object should have the following properties:
cars.push(
    {
        make: "Toyota",
        model: "Camry",
        year: 2018
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2018
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2018
    },
);

//  Remove the first car object from the "cars" array.
cars.splice(0, 1);

// Add a new car object to the "cars" array with the following properties:
cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020
});

// Update the "model" property of the second car object in the array to "Accord".
cars[1].model = "Accord"

// Print the final "cars" array after performing the above operations.
console.log(cars);
