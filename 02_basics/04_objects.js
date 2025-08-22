// const newUser = new Object() // singleton object
const newUser = {}
newUser.id = "1234abcd"
newUser.name = "Ishan"
// console.log(newUser);

const regularUser = {
    email: "kuchbhi@gmail.com",
    fullname: {
        userFullName:{
            firstName: "ishan",
            lastName: "chandrakar"
        }
    }
}

// console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = Object.assign( obj1, obj2)
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));

// console.log(regularUser.hasOwnProperty('lastName'));

const course = {
    courseName: "Chai aur JS",
    price: "free",
    courseInstructor: "Hitesh"
}
const {courseInstructor: teacher} = course
console.log(teacher);
