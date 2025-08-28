// forof
const arr = [1,2,3,4,5]

for (const element of arr) {
    // console.log(element)
}

const name = "ishan"
for (const element of name) {
    // console.log(element);
    
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("Fr", "USSR")
// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key}:- ${value}`);  
}

const myObject = {
    game1: "NFS",
    game2: "GTA",
    game3: "POP"
}
for (const [key, value] of myObject) {
    console.log(`${key}:- ${value}`);
}