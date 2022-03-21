// nested function

// function add(num) {

//   function num1(n1) {
  
//     function num2(n2){
//         console.log(n2*n2);
//     }
//     num2(num)
//   }
//   num1(num);

// }
// add(5);


// ----------function=========

function add(num){
    function sqr(){
        return num * num
    }
    let sq = sqr()
    return sq
}

let ad = add(5)
console.log(ad);