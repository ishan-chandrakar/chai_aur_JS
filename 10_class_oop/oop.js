const user = {
    username: "ishan",
    logInCount : 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from DB")
        console.log(this)
    }
}
// user["getUserDetails"]()

function UserDetails(username, logInCount, isLoggedIn){
    this.username = username,
    this.logInCount = logInCount,
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}
const User1 = new UserDetails("hitesh", 3, true)
const User2 = new UserDetails("ishan", 2, false)
console.log(User1.constructor);

