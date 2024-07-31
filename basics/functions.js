"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
