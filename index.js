"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//strings
var greetings = "Hello Mr";
console.log(typeof greetings);
//number
var userId = 1234;
console.log(typeof userId);
//boolean
var isLoggedIn = false;
console.log(typeof isLoggedIn);
//typeinference
var id = 1234;
console.log(typeof id);
//any
var result = "pass";
console.log(typeof result);
result = false;
console.log(typeof result);
result = 100;
console.log(typeof result);
var output;
console.log(typeof output);
output = false;
console.log(typeof output);
output = 100;
console.log(typeof output);
//functions
function addTwo(num) {
    return "hello";
}
console.log(addTwo(3));
var addThree = function (num) {
    return "hello";
};
console.log(addThree(2));
function addFour(num) {
    return num + 4;
}
var addfive = function (num) {
    return num + 5;
};
function createUser(_a) {
    var string = _a.name, number = _a.age;
    return { name: string, age: number };
}
var user = { name: "Ali", age: 16 };
createUser(user);
