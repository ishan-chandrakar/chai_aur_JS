const myObject = {
    js: "Javascript",
    cpp: "C++",
    py: "Python"
}
for (const key in myObject) {
    // console.log(`${key}:- ${myObject[key]}`);
}

const programming = ["js", 'py', 'java', 'cpp']
for(const key in programming){
    // console.log(`${key}:- ${programming[key]}`);
    
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

for (const key in map) {
    // console.log(key);  
}

const myName = "Ishan"
for (const character in myName) {
    console.log(myName[character]);
    
}