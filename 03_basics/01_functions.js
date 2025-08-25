function sayMyName(){
    console.log("Ishan Chandrakar");   
}
// sayMyName()

function addTwoNumbers(num1, num2){
    return num1+num2
}
let sumNumbers = addTwoNumbers(1,"abc")
// console.log(sumNumbers);

function cartPricingTotal(...price){
    return price
}
// console.log(cartPricingTotal(100,200,300,400));

const user = {
    name: "Ishan",
    price: "free"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    name: "Hitesh",
    price: "1999"
})