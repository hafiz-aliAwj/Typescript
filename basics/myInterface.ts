interface User {
    readonly dbId: string
    email: string
    userId: number
    googleId?: string
    startTrial(): string
    getCoupon(couponName: string, off: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta"
}

 let myUser: Admin = {
    dbId: "riin49hf",
    email: "aa.com",
    userId: 12,
    githubToken: "wfw",
    role: "admin",
    startTrial: () => {
        return "hi"
    } ,
    getCoupon(couponName: "MB40", off: 40) {
        return 40
    },
 }

 export {}