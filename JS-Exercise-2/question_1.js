// 1. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​the​ ​ first​ ​ and​ ​ last​ ​ element​ ​ of​ ​ an​ ​ array.​
//  Passing​ ​ a parameter​ ​ 'n'​ ​ will​ ​
// return​ ​ the​ ​ first​ ​ 'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ and​ ​last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the array.

static_array = [0,1,2,3,4,5,6,7,8,9]
// Input = 3
// Output = First 3 element : [0,1,2,] , Last 3 element : [7,8,9]

function firstLastElement(n){
 let lengthOfArray = static_array.length;
 return `First ${n} element : [${static_array.slice(0,n)}] , Last ${n} element :[${static_array.slice(lengthOfArray - n)}]`;
}

console.log(firstLastElement(5))
