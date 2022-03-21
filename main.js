// var h1Tag  = document.querySelector('h1')
// var btnTag = document.querySelector('button')
// btnTag.onclick = function(){
//   var text =   h1Tag.textContent;
//   if(text == 'hi'){
//    h1Tag.textContent = 'I am serius person'
//   } else {
//      h1Tag.textContent = 'hi'
//   }
// } 
// -------------------------
/*  let h1tag = document.querySelector("h1")
 let button = document.querySelector("button")

 button.onclick = function(){
    let content =  h1tag.textContent;
     if(content == 'imran'){
        h1tag.textContent = 'saogr'
     } else {
        h1tag.textContent = 'imran'
     }
 }
// ------------------------- */

// var h1tag = document.querySelector('h1')
// var name  = prompt("Enter Your Name ?")
// h1tag.textContent = 'Hello ' + name ;
// ----------------------------

// var htmlTag = document.querySelector('html')
// var h1 = document.querySelector('h1')
// var btn = document.querySelector('button')

// htmlTag.onclick = function(){
//   h1.textContent = 'Clicked the change tag';
//   btn.style.background = 'green';
//   alert("clicked any one page")
// }


// ********************Day-2**********

// var a = 20 ;
// var b = 50 ;
// var c= 10 ;

// if(a > b){
//     console.log('A Grater then B');
//     if(a > c){
//         console.log('A Grater then C');
//     } else {
//         console.log('C is Greater then all');
//     }
// } 
// else {
//     console.log('B Greater then A');
//     if(b > c){
//         console.log('B is greater then all');
//     } else {
//         console.log('C is greater then all');
//     }
// }


// let imgTag = document.querySelector('img') 
// let page = document.querySelector('html')

// page.onclick = function (){
//     let imgSrc = imgTag.getAttribute('src')
//    if(imgSrc == 'sagor.jpg'){
//     imgTag.setAttribute('src', 'another.png')
//     console.log(imgTag);
//    } else {
//     imgTag.setAttribute('src', 'sagor.jpg')
//     console.log(imgTag);
//    }
// }

//  ****************** form validation *****************

// let userName = prompt('Enter Your name')
// let h2Tag = document.querySelector("h2")

// function user(userName){
//   h2Tag.textContent = userName 
 
//   if(userName == null || userName == 0){
//     alert("plase your name")
//   }
//   else{
//     console.log(userName.length);
//     h2Tag.textContent = userName 
//   }
// }

// user(userName)


// ******************** hosting ****************

// var a;
// // var b; 
// console.log(a);   // undefined

// console.log(b);  // undefined
// var b; 

// // console.log(c);  // refarendce c is nto defined

// let x ;
// console.log(x);  // undefined


// console.log(y);  // refarence error 
// let y; 


// ******************scope*****************

// if(true){
//   var p = 10;
// }
// // console.log(p); // p = 10

// if(true){
//   let  q = 20;
//   console.log(q); // q = 20
// }
// console.log(q);   // ReferenceError: q is not defined


//****************** */ Goble vaiabile *****************

// window.a =  5 ;
// console.log(window.a);  // 5


// var b = 6 ;
// console.log(window.b);  // 5

// let c  = 7 ;
// console.log(window.c);  // undefended

//****************** */ Function scope *****************

// abc()
// function abc(){
//    console.log('abc');
// }
// //function expression - opere chole jabe funciton

// // xyz()  // TypeError: xyz is not a function 
// var xyz = function(){
//    console.log('xyz');
// }

//  *********form valided************

// let name = document.getElementById('name');
// let password = document.getElementById('password');
// let submit = document.getElementById('submit');

// submit.addEventListener('click', function(){
//    userName = name.value 
//    userPassword = password.value 

//    function valided(name, password){
//       if(name == ''){
//          alert('empty name not allord')
//       } else if(password == '' || password.length < 5){
//          alert("not good password")
//       } else {
//         alert('Login Succesfully')
//       }
//    }
//    valided(userName,userPassword)
//    name.value  = ''
//    password.value  = ''
// })


// ****************TypeConvertion******************

// var str = '10';
// var num = 5;
// console.log(str + num);  // 105

// var str1 = '10.343';
// var num1 = 5;
// console.log(parseInt(str1)+ num1); // 15

// var str2 = '10.343';
// var num2 = 5;
// console.log(parseFloat(str2)+ num2); // 10.343

// var str3 = '8';
// var num3 = 5;
// console.log(+str3 + 5); //13

// var str4 = '10';
// var num4 = 5 ;
// console.log(str4 - num4); // 5

// var str5 = '10';
// var num5 = 5 ;
// console.log(str5 * num5); // 50

// var str6 = '10';
// var num6 = 5 ;
// console.log(str6 / num6); // 2

// ----------------------------error----------------------

// try{
//   console.log('hi there');
//   console.log(x);
  
// }
//  catch(error){
//   console.log('inside error');
// }
// finally{
//    console.log('by there');
// }

// ----------------------forLoop----------------

// let user = parseInt(prompt())
// console.log(user);
// for(let i = 0; i < user; i++){
//    console.log('user', i);
// }

// ---------------nestedLoop--------- 
 
// var s = 5; 
// for(let i = 1; i <= s; i++){
   
//   for(let j  = 1; j <= s; j++){
//      console.log(i, ' = ', j);
//   }

// }

// // -----------
// var s = 5; 
// for(let i = 1; i <= s; i++){
   //    if(i == 3){
   //    continue
   // }
//   for(let j  = 1; j <= s; j++){
   //   if(j == 3){
   //      break
   //   }

   // if(j == 3){
   //   continue 
   // }

   // console.log(i, ' = ', j);
//   }
//   if(i == 3){
//    break
// }
// }


// ---label al break ---
// var s = 5;
// outer:
// for(let i = 1; i <= s; i++){
   
//   for(let j  = 1; j <= s; j++){
//      if(j == 3){
//         break outer;
//       }
//       console.log(i, ' <----- ', j);
//   }
// }

// ---label continue all  ---
// var s = 5;
// outer:
// for(let i = 1; i <= s; i++){
   
//   for(let j  = 1; j <= s; j++){
//      if(j == 3){
//       continue outer;
//       }
//       console.log(i, ' <----- ', j);
//   }
// }