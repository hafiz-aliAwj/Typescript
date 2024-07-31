type User = {
    name:string
    email: string
    age: number
}

function makeUser(user: User): User{
   return user
}

makeUser({name: "", email: "", age: 5});

type Student = {
    readonly _id: string
    name: string
    email: string
    grade: number
    skills?: string[]
}

let myStudent: Student = {
    _id: "12",
    name: "stud",
    email: "stud@a.com",
    grade: 5
}

myStudent.grade = 6
// myStudent._id= "123"

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string 
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}
export {}