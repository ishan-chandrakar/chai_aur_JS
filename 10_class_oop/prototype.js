let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.sayMyName = function(){
    console.log(`Your name is ${this}`)
}
userName = "Ishan"
// heroPower.sayMyName()

const Teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "Make JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}

Object.setPrototypeOf(Teacher, teachingSupport)
console.log(teachingSupport.makeVideo);
console.log(TASupport.isAvailable);
