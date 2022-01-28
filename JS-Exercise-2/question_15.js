// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​object​
// ​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at particular​ ​ position.
// Also if the position does not exist then error message should be shown to the user.

// static_array = [{name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},{name:  "Max" , age : 20} ]
// Input : ask user to delete or insert
// delete_element_position = 2  OR insert_element_position = 3
// insert_name = "Daniel"
// insert_age = "56"
// Output : if deleted
// [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12}]
// if inserted
// [  {name:  "Jack" , age : 23} , {name:  "Sam" , age : 12} ,  {name:  "Max" , age : 20} ,
// {name:  "Daniel" , age : 56} ]

static_array = [
  { name: "Jack", age: 23 },
  { name: "Sam", age: 12 },
  { name: "Max", age: 20 },
];

let value = +prompt("please press the button for delete 0 & insert 1");
switch (value) {
  case 0:
    deleteElement();
    break;
  case 1:
    insertElement();
    break;
}

function deleteElement() {
  var position = +prompt("enter the position");
  static_array.splice(position, 1);
  console.log(static_array);
}
// console.log(deleteElement(2));

function insertElement(position, object) {
var position = +prompt("enter the position");
var object = {name : prompt("enter the name"), age : prompt("enter the name")}
  static_array.splice(position, 0, object);
  console.log(static_array);
}
// console.log(insertElement(0,{name: "Daniel",age:  56}))
// console.log(insertElement(1,{name : "priyanshu", age :56}))
