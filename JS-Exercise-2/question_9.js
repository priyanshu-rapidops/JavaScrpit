// 9. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​timestamp​ ​ to​ ​ time.

// Input = 1607518718
// Output = Wednesday, December 9, 2020 6:28:38 PM GMT+05:30

const Input = 1607518718;

const milliseconds = 1607518718 * 1000;

const dateObject = new Date(milliseconds);

const humanDateFormat = dateObject.toLocaleString();

let day = dateObject.toLocaleString("en-US", {weekday: "long"}) 
let mon = dateObject.toLocaleString("en-US", {month: "long"}) 
let date = dateObject.toLocaleString("en-US", {day: "numeric"}) 
let year = dateObject.toLocaleString("en-US", {year: "numeric"})  
let hour = dateObject.toLocaleString("en-US", {hour: "numeric"}) 
let min = dateObject.toLocaleString("en-US", {minute: "numeric"}) 
let sec = dateObject.toLocaleString("en-US", {second: "numeric"}) 
let tz = dateObject.toLocaleTimeString("en-US", {timeZoneName: "short"}) 

let time = day+ ','+mon+" "+date+ ","+year+","+tz;

console.log(time);