const func = require("./helper");
const fs = require("fs");
const person = require("./person.json");

console.log(func.luasSegitiga(10, 10));
console.log(func.luasPersegi(10, 10));

// read file dengan module bawaan js
const isi = fs.readFileSync("./test.txt", "utf-8");
console.log(isi);

// write file
const isiBaru = "ini isi terbaru";
fs.writeFileSync("./test.txt", isiBaru);

// create json

function createPerson(person) {
  fs.writeFileSync("./person.json", JSON.stringify(person));
  return person;
}

// const fathoni = createPerson({
//   name: "Fathoni",
//   age: 20,
// });

// console.log(fathoni);
console.log(person);
