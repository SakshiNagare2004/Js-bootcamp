//Assignment 3
//**Part 1: User Data Array Manipulation**

//Define an array `users` containing at least 15 objects, where each object represents a user with 
//the following properties: `name`, `age`, `gender`, and `location`.

let users=[
    {name:'sakshi',age:19,gender:'female',location:'nashik'},
    {name:'sanket',age:23,gender:'male',location:'nashik'},
    {name:'mansi',age:15,gender:'female',location:'pune'},
    {name:'pallavi',age:26,gender:'female',location:'indore'},
    {name:'lekha',age:32,gender:'female',location:'banglore'},
    {name:'riya',age:10,gender:'female',location:'hydrabad'},
    {name:'soham',age:18,gender:'male',location:'chennai'},
    {name:'rakesh',age:42,gender:'male',location:'jammu'},
    {name:'aryan',age:22,gender:'male',location:'punjab'},
    {name:'harshal',age:25,gender:'male',location:'maharashtra'},
    {name:'priya',age:17,gender:'female',location:'madhyapradesh'},
    {name:'anam',age:21,gender:'female',location:'uttarpradesh'},
    {name:'shrushti',age:19,gender:'female',location:'rajasthan'},
    {name:'ujwala',age:45,gender:'female',location:'gujrat'},
    {name:'sunil',age:35,gender:'male',location:'tamilnadu'}
]

//Implement a function `isAdult` that takes a user object as input and returns `true` if the
 //user is 18 years or older, otherwise `false`.

function isAdult(user){
    user.age>=18 ? console.log('true') : console.log('false')
}
isAdult(users[5]);
isAdult(users[1]);

// Use the `filter` function to create a new array `adultUsers` by selecting only the users who
// are adults using the `isAdult` function.


let adultUsers=users.filter((user)=>{
    return user.age>=18
}).map((user)=>{
    return user.name
})
console.log(adultUsers);

// Implement a function `getFullName` that takes a user object as input and returns the user's
// full name (combine `name` and `location` properties).

function getFullName(user){
    console.log( user.name+'-'+user.location)
}
getFullName(users[8]);
getFullName(users[4]);

// Use the `map` function to create a new array `userNames` containing the full names of all users.

let userNames=users.map((user)=>{
    return( user.name+'-'+user.location)
})
console.log(userNames);

// **Part 2: Chaining User Data Operations**
//1. Implement a function `filterByGender` that takes a user object as input and a gender
string (e.g., "male" or "female") and returns `true` if the user's gender matches the input
gender, otherwise `false`

function filterByGender(user,input){
    user.gender==input ? console.log('true') : console.log('false')
}
filterByGender(users[5],'male');
filterByGender(users[5],'female');


//Use chaining to manipulate the `users` array in the following sequence:
//a. Filter and create a new array `femaleUsers` containing female users using the 
//`filterByGender` function.

let femaleUsers = users.filter((user)=>{
    return user.gender == 'female'
}).map((user)=>{
    return user.name;
})
console.log(femaleUsers);


// **Part 3: Movie Data Array Manipulation**
// 1. Define an array `movies` containing at least 10 objects, where each object represents a movie 
// with properties: `title`, `genre`, `year`, and `rating`

let movies=[
    {title:'jawan',genre:'action',year:2023,rating:5},
    {title:'welcome back',genre:'comedy',year:2022,rating:5},
    {title:'chup',genre:'horror',year:2022,rating:5},
    {title:'hero',genre:'action',year:2021,rating:5},
    {title:'gajini',genre:'horror',year:2020,rating:5},
    {title:'pk',genre:'action',year:2019,rating:5},
    {title:'tare jammen par',genre:'comedy',year:2018,rating:5},
    {title:'3 idiots',genre:'action',year:2017,rating:5},
    {title:'vivah',genre:'thrill',year:2016,rating:5},
    {title:'yariyaan',genre:'action',year:2012,rating:5}
]
// **Part 4: Chaining Movie Data Operations**
// 1. Implement a function `filterByGenre` that takes a movie object as input and a genre string 
// (e.g., "action" or "comedy") and returns `true` if the movie's genre matches the input genre, 
// otherwise `false`

function filterByGener(user,input){
    user.genre==input ? console.log('true') : console.log('false')
}
filterByGener(movies[5],'action');
filterByGener(movies[5],'comedy');


// 2. Use chaining to manipulate the `movies` array in the following sequence:
// a. Filter and create a new array `actionMovies` containing movies with the "action" genre using
//  the `filterByGenre` function.
// b. Use the `map` function to create a new array `movieTitles` containing the titles of all movies in `actionMovies`.

let actionMovies = movies.filter((user)=>{
    return user.genre== 'action'
}).map((user)=>{
    return user.title;
})
console.log(actionMovies);
