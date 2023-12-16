


const person = {fname:"John", lname:"Doe", age:25};

let text;
// for in  ist x ne zahl
for (let x in person) {
    // += ista das kleiche wie text = text + person
    console.log(x + "Das ist der Key")
  text += person[x];
    console.log(text + "Key und Value")
}


// for schleide
let text2 = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

// wert aus dem array
const cars3 = ["BMW", "Volvo", "Mini"];
//for of
for (let x of cars) {
    //console.log(x)
  text2 += x;
}


// ignoriert wenn variable in einer funktion ist
  var x = 10;
  // Here x is 10
  
  {
  var x = 2;
  // Here x is 2
  }
  
  // Here x is 2


//let ist lokal 
  let y = 10;
// Here y is 10

{
let y = 2;
// Here y is 2
}

// Here y is 10


// Konstanten
const PI = 3.141592653589793;
//PI = 3.14;      // This will give an error