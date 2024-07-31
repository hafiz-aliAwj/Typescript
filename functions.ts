function addTwo (num: number) {
    return "hello";
}
console.log(addTwo(3));

const addThree = (num: number) => {
    return "hello";
}
console.log(addThree(2));

function addFour(num:number):number{
    return num + 4;
}

const addfive = (num:number):number => {
    return num+5;
}

function createUser ({name: string, age: number}): {name: string, age: number}{
    return {name:string, age: number}
}

const user = {name: "Ali", age: 16};
createUser(user)

export {}