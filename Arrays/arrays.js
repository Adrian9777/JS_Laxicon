/*
Arrays sind Objekete
Arrays können verschiedene Datentypen enthalten
Arrays werden verwendet um Werte aufzulisten die keinen namen brauchen
In JS werden Arrays mit nummern Indexiert Object mit namen
typeof() um Datentyp herauszufinden
*/
const objects = [true, "text", 8]
const brands = "Mercedes, Audi, Tesla"
const cars = brands.split(",")
console.log(typeof cars)
console.log(cars.length)
console.log(cars[2])
//letztes element
console.log(cars[cars.length-1])
// am ende des Array etwas hinzuzufügen
cars.push("Bugatti")
console.log(cars)
// letzte element löschen
cars.pop()
console.log(cars)
// letzter Value löschen und in Variable speichen
const letzterValue = cars.pop()
console.log(letzterValue)
console.log(cars)

// löscht ersten eintrag
cars.shift()
// fügt wert an erster stelle ein
cars.unshift("Tesla")
console.log(cars)

const numbers = [0,1,2,3,4,5]
// macht aus inhalt ein String
console.log(numbers.toString())
console.log(cars.toString())

// gleich wie string operator frei wählbar
console.log(numbers.join("*"))

//löscht Arrray an stelle 2 shift und pop ist besser
//delete cars[2]

const truck = ["Man", "Volvo", "Mercedes"]

// verbindet Arrays miteinander
const vehicle = cars.concat(truck)
console.log(vehicle)



// macht aus zwei verschachtelten Arrays ein neues Arrray
const fahrzeuge = [["Mercedes A120","Mercedes B225"],["Fiat500", "FiatPunto"]]
console.log(fahrzeuge)
const newFahrzeug = fahrzeuge.flat()
console.log(newFahrzeug)

//hinzufügen oder löschen  von Values in einem Array
// 1. Position 2. wieviele Elemente gelöscht werden 3. welches element himzugefügt wird
newFahrzeug.splice(3, 1, "Pagani")

console.log(newFahrzeug)

// geht vom 2. element bis zum ende
const partiel = newFahrzeug.slice(2)
console.log(partiel)


const sortierung = newFahrzeug.sort()
console.log(sortierung)

const verkehrtherum = sortierung.reverse()
console.log(verkehrtherum)