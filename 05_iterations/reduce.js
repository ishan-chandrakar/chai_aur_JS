const myNums = [1,2,3]
// const sum = myNums.reduce((accumulator, currentValue) => {
//     console.log(`acc: ${accumulator}, curr: ${currentValue}`);
//     return accumulator + currentValue
// },0)
// console.log(sum);

const shoppingCart = [
    {
        courseName: "Web dev",
        price: 2999
    },
    {
        courseName: "mobile dev",
        price: 5999
    },
    {
        courseName: "ios dev",
        price: 9999
    },
    {
        courseName: "AI/ML",
        price: 6999
    }
]
const totalCost = shoppingCart.reduce((acc, currVal) => {
    return acc + currVal.price
},0)
console.log(totalCost);

