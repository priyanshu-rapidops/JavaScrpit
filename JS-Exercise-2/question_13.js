// 13. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ 
// to​ ​ print​​ an​ ​ integer​ ​ with​ ​ commas​ ​ as​ ​ thousands​ ​ separators.

// input_number = 1023165454197
// Output = 1,023,165,454,197
function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

console.log(numberWithCommas(1023165454197));