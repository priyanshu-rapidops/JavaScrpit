let string = "";

function cross(rows, columns){
    for(var i = 1; i <= columns; i++){
        for(var j = 1; j <= rows; j++){
            if(i == j || j == 6 - i){
                string += "*";
            }
            else {
                string += " ";
            }
        }
        string += "\n"
    }
    console.log(string)
}
cross(5,5)
