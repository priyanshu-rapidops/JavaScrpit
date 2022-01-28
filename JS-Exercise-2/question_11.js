// 11. Write​ ​ a ​ ​ JavaScript​ ​function​ ​ to​ ​ insert​ ​ a ​ ​ 
// string​ ​ within​ ​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​ is​ ​ 1).

// static_string = "This is a sample string"
// input_string = "Insert me"
// input_position = 3
// Output : "ThInsert meis a sample string"


function insertString(static_string, input_string, input_position){

 static_string =  static_string.slice(0, input_position)+input_string+static_string.slice(input_position) ;
 return static_string
}
console.log(insertString("This is a sample string","Insert me",3));

