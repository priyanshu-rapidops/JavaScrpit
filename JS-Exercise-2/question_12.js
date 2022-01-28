// 12. Write​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.

// input_length = 2
// input_string = "RapidOpsSolution"
// console.log(string_chop('RapidOpsSolution’',2));
// Output = ["Ra",​ ​ "pi",​ ​ "dO",​ ​ "ps",​ ​ "So",​ ​ ”lu”,​ ​ “ti”,​ ​ “on”]

function string_chop(string, valueforchunks) {
  var newarray = "";
  for (var i = 0; i < string.length; i += valueforchunks) {
    newarray = newarray + string.slice(i, i + valueforchunks) + ",";
  }
  console.log(newarray);
}
string_chop("RapidOpsSolution", 2);
