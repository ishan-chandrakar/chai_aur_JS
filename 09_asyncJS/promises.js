// const promiseOne = new Promise(function(resolve, reject){
//     // do async tasks
//     setTimeout(()=>{
//         console.log("async task is complete")
//         resolve()
//     },3000)
// })

// promiseOne.then(()=>{
//     console.log("Promise fulfilled")
// })

// const otherPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"ishan", userEmail: "ishan@gmail.com"})
//     },1000)
// })

// otherPromise.then(function(user){
//     console.log(`Username: ${user.username} & user mail: ${user.userEmail}`)
// })

// const thirdPromise = new Promise(function (resolve, reject) {
// 	let error = true;
// 	if (error) {
// 		reject("Error occured");
// 	} else {
// 		resolve({ username: "ishan", userEmail: "ishan@gmail.com" });
// 	}
// });
// thirdPromise
// 	.then(function (data) {
// 		console.log(data);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	})
// 	.finally(() => {
// 		console.log("The promise is either resolved or rejected");
// 	});

// const fourthPromise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		let error = true;
// 		if (error) reject("Something went wrong");
// 		else resolve({ username: "ishan", userEmail: "ishan@gmail.com" });
// 	}, 2000);
// });

// async function consumedPromiseFour(){
//     try {
//         const response = await fourthPromise
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumedPromiseFour()

const fetchOperation = new Promise(function (resolve, reject) {
	const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
	resolve(response);
});
fetchOperation
	.then(function (response) {
		return response.json();
	})
	.then(function (response) {
		let data = response;
		console.log(data);
	});
