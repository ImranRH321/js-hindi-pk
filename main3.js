// destakture aray -------
// var arr = [1,3,4,5]

// let n0 = arr[0]
// let n1 = arr[1]
// let n3 = arr[2]

// const  [s1,s2] = arr
// console.log(s1,'',s2);

// var a = 5 < 10;
// console.log(a);
// var b  = 10 > 5;
// console.log(b);

// ternari operator --------~

// var a = 30;
// var z = a % 3 == 0?a:0
// console.log(z);

// var x = 21;
// var y = x % 2 == 0? true: false;
// console.log(y);

// -------------X-----------
// let obj = {
//     name: 'Imran',
//     phone:'iPhone'
// }

// if('phone' in obj){
//     console.log(obj.phone)
// }

// delete obj.phone 
// console.log(obj);


// -----------X-------------

// function nam (){
//    this.x = 5
//    this.y = 6
// }

// let y = new nam()
// console.log(y);
// console.log(y instanceof nam);
// ----x---

// function nam (){
//    this.x = 5
// }

// let x = new nam()
// let y = new nam()

// console.log(x);
// y.x = 40
// console.log('-y-',y);

// javascript math Object ---------------

// let num = (1,2,3,4,5,6,7)
// let num1 = Math.max(1,3,4,5,6,7)
// let num2 = Math.min(12,34,4,5,6)
// let num3 = Math.ceil(5.5)
// let num4 = Math.floor(5.5)
// let num5 = Math.abs(5)
// let num6 = Math.round(5.5)
// let num7 =Math.floor( Math.random()*10+1)

// console.log(num1,'--->');
// console.log(num2,'--->');
// console.log(num3,'--->');
// console.log(num4,'--->');
// console.log(num5,'--->');
// console.log(num6,'--->');
// console.log(num7,'--->');

// <------------X----------->

// let dateObj = new Date()
// console.log(dateObj);
// console.log(dateObj.getFullYear());
// console.log(dateObj.getHours());
// console.log(dateObj.getMinutes());
// console.log(dateObj.getTime());


// clock ------- 

let time = new Date()
let hour = time.getHours()
time.setMinutes(3)
let minutes = time.getMinutes()
let seconds = time.getSeconds()


if(hour > 12){
   hour == 12
}

console.log(hour+":"+minutes+':'+seconds);
