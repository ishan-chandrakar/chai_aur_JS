const programming = ['js', 'python', 'cpp', 'ruby']

programming.forEach(function(item){
    // console.log(item); 
})

programming.forEach((language)=>{
    // console.log(language)
})

function printMe(item){
    console.log(item);    
}

// programming.forEach(printMe)

// programming.forEach((item, index, arr)=>{
//     console.log(`${index} :- ${item}`);
//     if(index==arr.length-1){
//         console.log(arr);        
//     }
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(`${item.languageName}:- ${item.languageFileName}`)
})