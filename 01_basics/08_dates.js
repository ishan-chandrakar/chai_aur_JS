let myDate = new Date()
// console.log(typeof myDate);

let newdate = new Date(2025, 8, 11)
// console.log(newdate.toString());

// console.log(myDate.toString());

let nowDate = Date.now()
// console.log(nowDate);

// console.log(newdate.getTime());
console.log(myDate.getMonth());

const weekDay = myDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
})
console.log(weekDay);

