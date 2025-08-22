const mySym = Symbol("key1")

const User = {
    name: "Ishan",
    age: 25,
    "current city": "raipur",
    isLoggedIn: true,
    loginDays: ["Monday", "Friday"],
    1: "one",
    [mySym]: "Symbol value"
}

// console.log(User.loginDays[0]);
// console.log(User["loginDays"][0]);
// console.log(User[1]);

// console.log(User);

User.greeting = function(){
    console.log("hello JS")
}
User.greeting()

User.greeting2 = function(){
    console.log(`Hello ${this.name} of age: ${this.age} years`)
}
User.greeting2()

