// Assignment 1:
first = (num) => {
    if (num > 0) {
        console.log("Given number is Positive number")
    }
    else if (num < 0) {
        console.log("Given number is Negative number")
    }
    else {
        console.log("Given number is Zero")
    }
}
first(-9);

// Assignment 2:
facto = (N) => {
    let ans = 1;
    for (let i = 1; i <= N; i++) {
        ans = ans * i;
    }
    return ans;
}
console.log("Factorial is", facto(5));

//Assignment 3
large = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log("Large number is " + large(5, 6))


//Assignment 4
palindrome = (str) => {
    let right = str.length - 1;
    let left = 0;
    while (left < right) {
        if (str[left] !== str[right]) {
            return "not palindrome "
        }
        left++;
        right--;
    }
    return "palindrome "
}
console.log("String is", palindrome("aba"))

//Assignment 5
prime = (num) => {

    if (num < 2) {
        console.log("There is no prime numbers")
        return;
    }
    //storeing prime numbers in array
    let ans = [];

    for (let i = 2; i <= num; i++) {
        let isprime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isprime = false;
                break;
            }
        }
        if (isprime) {
            ans.push(i);
        }
    }
    return ans;
}
console.log("Prime number in array: ", prime(20));

//Assignment 6
calc = (a, b, op) => {
    if (op === "+") {
        console.log("addition is ", a + b);
    }
    if (op === "-") {
        console.log("substraction is", a - b);
    }
    if (op === "*") {
        console.log("multiplication is", a * b);
    }
    if (op === "/") {
        console.log("division is", a / b)
    }
}
calc(55, 57, "+")

//Assignment 7
vowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels are", vowels("aeioushfdrusio"))

//Assignment 8
perfect = (num) => {
    let count = num;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            count = count - i;
        }
        else {
            continue;
        }
    }
    if (count === 0) {
        console.log("perfect number");
    }
    else {
        console.log("not perfect number");
    }
}
// perfect number is 6, 1 + 2 + 3 = 6.
// perfect number is 28, 1 + 2 + 4 + 7 + 14 = 28.
perfect(28);

//Assignment 9
fib = (num) => {
    let a = 0;
    let b = 1;
    let c = 0;
    let ans = [];
    for (let i = 0; i < num; i++) {
        c = a + b;
        a = b;
        b = c;

        if (c < num) {
            ans.push(c)
        }
    }

    return ans;

}
console.log("Fibonacci numbers are", fib(20))

//Assignment 10
table = (num) => {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(num * i)
    }
    return table;
}

console.log("Table upto 10", table(2))
