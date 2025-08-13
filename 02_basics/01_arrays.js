const myArr = [1,2,3,4,5]
const newArr = new Array(1,2,3,4)

// newArr.push(5,6)
// newArr.pop()

// newArr.unshift(0)
// newArr.shift()
// console.log(newArr.includes(3));
// console.log(newArr.indexOf(3));

// slice
console.log("A", myArr);
const myarr1 = myArr.slice(1,3)
console.log("slice", myarr1);
console.log("B", myArr);

// splice
const myarr2 = myArr.splice(1,3)
console.log("splice", myarr2);
console.log("C", myArr);
