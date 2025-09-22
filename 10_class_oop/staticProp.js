class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
    createId(){
        return 123
    }
}
const ishan = new User("ishan")
console.log(ishan.createId());
