function sayHello(name) {
  console.log(`Welcome to ${name}`);
}
const sayHi = (name) => {
  console.log(`Welcome to ${name}`);
};

function sum(a, b) {
  return a + b;
}
// const findSum = (a,b)=>{
//     return a+b;
// }
const findSum = (a, b) => a + b;

sayHello("Akshat Kumar");
sayHi("Arun Kumar");
console.log(`sum of 2 and 5 is ${sum(2, 5)}`);
console.log(`sum of 2 and 5 is ${findSum(2, 5)}`);
