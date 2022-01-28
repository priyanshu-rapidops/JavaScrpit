//  3. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​frequent​ ​ item​ ​ of​ ​ an​ ​ array.

static_array = [0, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9];
// Output = 5

let max = 0;
let element = 0;

for (let i = 0; i < static_array.length; i++) {
  let count = 0;
  for (let j = 1; j < static_array.length - 1; j++) {
    if (static_array[i] === static_array[j]) {
      count++;
    }
  }

  if (count > max) {
    max = count;
    element = i;
  }
}
console.log(static_array[element]);
