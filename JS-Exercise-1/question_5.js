

function pattern(n){
    let string = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
        string += " ";
    }
    for (let k = i; k <= n; k++) {
        string += k + " ";
    }
    string += "\n";
}

for (let i = n - 1; i >= 1; i--) {

    for (let j = 1; j < i; j++) {
        string += " ";
    }
    for (let k = i; k <= n; k++) {

        string += k + " ";
    }
    string += '\n';
}
console.log(string);
}

pattern(5)