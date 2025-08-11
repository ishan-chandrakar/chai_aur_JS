const name = "ishan"
const repoCount = 1

console.log(`My name is ${name} and my repo count is ${repoCount}`);

let gameName = "Prince of Persia"

console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

let subStr = gameName.substring(2,5)
console.log(subStr);

let stringSlice = gameName.slice(-15,5)
console.log(stringSlice);

let extraSpace = "  ishan   "
console.log(extraSpace.trim());

let url = "http://ishan%20chandrkar.com"
console.log(url.replace('%20', '-'));

console.log(gameName.includes('s'));

console.log(gameName.split('e'));

