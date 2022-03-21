// for in Loop ----------------------Object update loop

// let obj = {
//     name: 'imran',
//     age: 20,
//     class: 'Eleven',
//     subject: 'Math'
// }

// for(let key in obj){
//     console.log(obj[key]);
//     console.log(`${key}  = value of = ${obj[key]}`);
// }

// for of Loop -----------------Array update loop
// var arr = [1,2,3,4,5]
// for(let element of arr){
//     console.log(element);
// }
// console.log('----------------------');

// var array = [1,2,3,4,5]
// array.forEach((ele) => {
//     console.log(ele);
// })

// *****************************Function**********************

// function addToNumber(num){
//  num = num + 1
//  console.log(`update value pass = ${num}`);
// }
// let a = 5;
// addToNumber(a)
// console.log(a);

// --

// function addToNumber(student){
//       student.name = 'Mr.' + student.name
//       console.log(student);
//     }
//     let obj = {name: 'imran'}
//     addToNumber(obj)
//     console.log(obj);
//     // refarece pass

// --

// function addToNumber(arr) {
//  arr[0] == arr[0] + 0
//  arr[1] == arr[1] + 1
//  arr[2] == arr[2] + 2
//  arr[3] == arr[3] + 3
//  arr[4] == arr[4] + 4
//  console.log(arr);
// }
// let arr1 = [1,2,3,4,5]
// addToNumber(arr1);
// console.log('array', arr1);


// <---------------------Function expression------------------>
// function Expression  and Antoninus function 
// var sqr = function(num){ 
//  num *= num
//   console.log(num);
// }
// sqr(5) 

// let getCube = function cube(num){ 
//   console.log('num', num*num*num);
// }
// // cube(5) error
// getCube(5)

// -----------------configeration------------

// var name = 'add'
// // let name = 'sub'

// let getResult;

// if(name == 'add'){
//   getResult = function(num1 , num2){
//      console.log(num2 + num2);
//   }
// }
// else if(name == 'sub'){
//   getResult = function(num1,num2){
//     console.log(num1 - num2);
//   }
// }

// getResult(5,3)


// <--------------recustion--------->
// 1
// function recursion(value){
//     if(value == 5){
//         return 5
//     }
//     console.log(value);
//     value++
//     recursion(value)
// }

// recursion(0)// 0,1,2,3,4,


// // 2--
// var sqr = function recursion(value){
  
//   if(value == 0){
//       return 0
//   }
//   console.log(value);
//   value--
// //   recursion(value) //1
// //   sqr(value) //2
// // arguments.callee(value) //3
// }
// sqr(5)

// name config -----------------

// function outer(num){
//     let x = 23
//     function innner(x){
//         num = 20
//         console.log(x);
//         console.log(num);
//     }
//     innner(3)

// }console.log(outer);

// -------------arguments-------------

// function addToNum(a,b, ...c){
//     console.log(c);
//     console.log('-------------');
//     console.log(a + b );

// }
// // addToNum(5,2, 3)
// addToNum(5,2,3,5,6,7 )

// - -

// function addToNum(){
// //   console.log(arguments);
//  for(let arg of arguments){
//      console.log(arg);
//  }
// }
// addToNum(1,2,3,4,5,6)

// --    

// function addToNum(){
//     //   console.log(arguments);
//      let sum = []
//      let total = 0
//     let arg = Array.from(arguments)
//     arg.forEach(element => {
//         total = total+= element 
//         console.log();
//         sum.push(total)
//     });
//       console.log(total);
//       console.log(sum);
//     }

//     addToNum(1,2,3,4,5,6)


// ---------------arrow-function------

// var sqr = num => num * num
// console.log(sqr(5));


// var sqr = (num,num1,num2) => {return num*num1*num2}
// console.log(sqr(3,5,3));


// ----->><<-----

// var a = '10+20+30'
// console.log(eval(a));

// let b = '4.5'
// console.log(parseInt(b)+2);
// console.log(parseFloat(b)+2);

// function defult arguments ----

// function add(a, b=10){
//     console.log(a*b);
// }
// add(5)


// ----assignment 

var x = 5;
var y = 10;
var z = (x = y)
console.log(z);