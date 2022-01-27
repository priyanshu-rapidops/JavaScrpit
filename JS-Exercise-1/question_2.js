let string = "";

function rectangle(rows, columns){
    for(var i = 1; i <= columns; i++){
        for(var j = 1; j <= rows; j++){
            if(i == 1|| i == columns || j == 1 || j == rows){
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
rectangle(15,15)