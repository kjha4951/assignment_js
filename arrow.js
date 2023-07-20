// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); 



//----object mathod


// const person = {
//     name: "Alice",
  
    
//     sayHello: function () {
//       console.log(`Hello, my name is ${this.name}`);
//     },
  
    
//     sayHelloArrow: () => {
//       console.log(`Hello, my name is ${this.name}`); 
//     }
//   };
  
//   person.sayHello(); 
//   person.sayHelloArrow(); 



//generators in javascript

// function* num(){
//     let i=0;
    
//     //let i=0
//     // yield 1;
//     // yield 2;
//     // yield 3;
//     // yield 4;
//     // yield 5;
//     // yield 6;

// while(true) {
//     yield i++;
    
// }

// }

// const gen =num();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// Iteration Control: Generators allow you to control the iteration process explicitly. By using the yield keyword, you can pause
//  the generator's execution and then resume it later. This provides more fine-grained control over how and when values are produced.

//promise is a special type of object on javascript that represents the eventual completion (or failure) of an asynchronus opration 
//and its resulting value


//handle fulfiled (resolved ) promises
// Promise.then((result)=>{})
// Promise.catch((error)=>{})

//collback
// setTimeout(() => {
//     console.log("wait for 3 sec")
// },3000);



//nested time out
// setTimeout(()=>{
//     console.log(3);
//     setTimeout(()=>{
//         console.log(2);
//         setTimeout(()=>{
//             console.log(1)
//         },1000)
//     },1000)
// },1000)




// const myPromise = new Promise((resolve,reject)=>{
// const rand =Math.floor(Math.random() *2)
// if(rand==0){
//     resolve();
// }else{
//     reject();
// }
// });

// myPromise.then(()=>console.log('success')).catch(()=>console.log('somthing went wrong'))
