//Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ shuffle​ ​ an​ ​array.

static_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Output = [4,1,5,2,3,0,6,8,9,7]


function shuffleArray(static_array) {
  for (let i = 0; i < static_array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = static_array[i];
    static_array[i] = static_array[j];
    static_array[j] = temp;
  }
  return static_array;
}
console.log(shuffleArray(static_array));
