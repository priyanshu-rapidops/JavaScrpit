// 14. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ 
// array​ ​ of​ ​ object​ ​ in​ ​ ascending​ ​ order​ ​ of​ ​ age, & descending​ ​
//  order​ ​ of​ ​ name.​ ​ Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​which are​​:

// 1.​ ​ Id,​ ​
// 2.​ ​ Name,​ ​
// 3.  Age

// NOTE:​ ​ Array​ ​ have​ ​ minimum​ ​ 10​ ​ objects.

let array = [
{ Id : 1 ,Name : "x", Age : 25},
{ Id : 2 ,Name : "b", Age : 55},
{ Id : 3 ,Name : "r", Age : 35},
{ Id : 4 ,Name : "q", Age : 15},
{ Id : 5 ,Name : "g", Age : 50},
{ Id : 6 ,Name : "s", Age : 65},
{ Id : 7 ,Name : "t", Age : 95},
{ Id : 8 ,Name : "u", Age : 66},
{ Id : 9 ,Name : "z", Age : 22},
{ Id : 10 ,Name : "a", Age : 21},

]
// sort for age
console.log(array.sort(function(a, b){return a.Age - b.Age}))
// sort for name
let namesorted = array.sort((a, b) => {
    let fa = a.Name.toLowerCase(),
        fb = b.Name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

console.log(namesorted);