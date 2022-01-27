function triangle(rows){
let string = "";
for (var i = 1; i < rows; i++) {
  for (var j = 1; j < i; j++) {
    string += "*";
  }
  string += "\n";
}

for (var i = 0; i < rows; i++) {
  for (var k = 0; k < rows - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string)
}

triangle(5)