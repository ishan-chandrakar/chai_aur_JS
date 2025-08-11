// Primitive Datatypes  =>  call by value
// number
// string
// bigInt
// boolean
// undefined
// null
// symbol

let id = Symbol(123)
let anotherid = Symbol(123)
console.log(id);


// Non-primitive/ reference datatype  =>  call by reference
// array [] => object
// object {} => object
// function () => function

let mahavtars = ["Narsimha", "Parshuram", "Raghunandan"]

let newObj = {
    name: "Ishan",
    age: 25
}

const newFn = function(){
    console.log("function");
}


// Stack, Heap

// Primitive datatype => Stack memory
// NOn-primitive datatype => Heap memory

let name = "Ishan"
let anotherName = name
anotherName = "Rajat"
console.log(name);
console.log(anotherName);

let userDetails = {
    name: "ishan",
    age: 25
}
let anotherUser = userDetails
anotherUser.name = "Rajat"

console.log(userDetails.name);
console.log(anotherUser.name);
