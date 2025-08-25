
const user = {
    name: "Ishan",
    price: 999,
    welcomeMessage: function(){
        console.log(this)
    }

}
// user.welcomeMessage()
// console.log(this);

const newFn = ()=>{
    let age = 20
    console.log(this.age)
}
// newFn()

const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(1,2));

const returnObject = () => ({name: "ishan"})
// console.log(returnObject());

(function paani(){
    console.log(`DB connected`);
})();