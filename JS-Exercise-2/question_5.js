// 5. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​of​ ​ two​ ​ arrays,​ ​ and​
//  ​Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays, 
//  and intersection of two arrays.
let array_a = [0,1,2,3] , array_b = [3,4,5]

// Output = union_array : [0,1,2,3,4,5] ,


// for(var i = 0; i < array_b.length; i++){
//     if(array_a.includes(array_b[i]) !== true){
//         array_a.push(array_b[i])
//     }
// }
// console.log(array_a)

//  a-b_array = [0,1,2], b-a_array = [4,5], intersection_array = [3]

function findDifferernce(array_a,array_b){
  let a_b = array_a.filter(value => !array_b.includes(value))
  console.log("a-b array :-", a_b);
  let b_a = array_b.filter(value => !array_a.includes(value))
  console.log("b_a array :-", b_a);
  let intersection_array = array_a.filter(value => array_b.includes(value))
  console.log("intersection_array :-", intersection_array );

}
findDifferernce(array_a,array_b)