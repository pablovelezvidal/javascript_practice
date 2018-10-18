//here goes the main word
var stack = [];

var word = "racecaroti";

var rword = "";

//make the string an array
for (var i=0; i< word.length; i++) {
    stack.push(word[i]);
}

for (var i=0; i<word.length; i++) {
    rword += stack.pop();
    
}

console.log(rword);
