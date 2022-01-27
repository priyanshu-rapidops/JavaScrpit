function hollowDiamond(rows){
let string = "";
for(var i = 1; i < rows; i++){
           for(var j = 1; j <= ((2*rows)-1); j++){
                   if(j == (rows - (i -1)) || j == (rows + (i -1))){
                           string += "*"
                   }
                   else {
                           string += " "
                   }
           }
           string += "\n"
   }
   for(var i = rows-1; i >= 1; i--){
           for(var j = 1; j <= ((2*rows)-1); j++){
                   if(j == (rows - (i -1)) || j == (rows + (i -1))){
                           string += "*"
                   }
                   else {
                           string += " "
                   }
           }
           string += "\n"
   }
   
   console.log(string)

}
hollowDiamond(9)
