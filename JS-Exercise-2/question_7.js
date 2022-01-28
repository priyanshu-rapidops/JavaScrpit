//  Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​name​ ​ from​ ​ a ​ ​ particular​ ​ date.

// Input = 01-07-2020 or 01/07/2020
// Output = July

function getMonth(n) {
  let date = new Date(n);
  console.log(date.toLocaleString("en-us", { month: "long" }));
}

getMonth("05-10-2020");
