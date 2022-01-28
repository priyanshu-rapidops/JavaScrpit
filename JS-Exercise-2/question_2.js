// 2. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​
//  number​​ as​ ​ input​ ​ and​ ​ insert​ ​ dashes​ ​ (-) between​ ​ each​ ​ two​ ​ even​ ​ numbers.

// Input = 02544168
// Output = 0-254-416-8

let number = "02544168";
let newNum = number.split("");

let newstring = "";
for (let i = 0; i < newNum.length; i++) {
  if (newNum[i] % 2 == 0 && newNum[i + 1] % 2 == 0) {
    newstring = newstring + newNum[i] + "-";
  } else {
    newstring = newstring + newNum[i];
  }
}
console.log(newstring);
