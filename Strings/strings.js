const textVariable = "Hallo Welt";
const spaces = "       Hallo"
console.log(textVariable.length)

//löscht alle spaces am anfang
console.log(spaces.trimStart())

//löscht alle spaces
console.log(spaces.trim())

//löscht alle spaces am ande
console.log(spaces.trimEnd())

//split strings(",")
const splitting = "Mercedes, BMW, Ferrari"
const cars = splitting.split(",")
console.log(cars)