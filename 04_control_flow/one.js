// Nullish Coalescing Operator (??) : null undefined 

let val1 ;
// val1 = undefined ?? null;
// val1 = null ?? undefined;
// val1 = 10 ?? 5
// val1 = 5 ?? 10
val1 = null ?? 10


console.log(val1);

let coffePrice = 100
coffePrice >= 50 ? console.log("costly") : console.log("affordable")