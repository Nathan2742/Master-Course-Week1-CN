console.log("Hello World");

console.log("hello" .toUpperCase());

console.log(Math.random());

console.log(Math.random()*10);

console.log(Math.round(Math.random()*10));

// console.log (
//     `
//      |  |  |
//      |  |  |
//      |  |  |
//    -----------
//      |  |  |
//      |  |  |
//      |  |  |
//    -----------
//      |  |  |
//      |  |  |
//      |  |  |`
// )

console.log("  |   |   |  ")
console.log("  |   |   |  ")
console.log("  |   |   |  ")
console.log("-------------")
console.log("  |   |   |  ")
console.log("  |   |   |  ")
console.log("  |   |   |  ")
console.log("-------------")
console.log("  |   |   |  ")
console.log("  |   |   |  ")
console.log("  |   |   |  ")


var down = ("  |   |   |  ")
var across = ("-------------")

array =[down,down,down,across,down,down,down,across,down,down,down]

console.log(array)

// let bar=("    |    |    \n    |    |    \n    |    |    ");
// let line=("---------------");
// console.log(bar);
// console.log(line);
// console.log(bar);
// console.log(line);
// console.log(bar);

let bar=("   |   |   |   \n   |   |   |   \n   |   |   |   ");
let line=("---------------");
array=[bar,line,bar,line,bar];
console.log(array.join("\n"));

