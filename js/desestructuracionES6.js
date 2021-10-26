let [a,b] = [3,9];
let c, d = [3,9]; //?Porqué? c = Undefined; d = [3,9]
console.log("a: " + a + " b: " + b);
console.log("c: " + c + " d: " + d);

let a1, b1, c1 = [ 3, 9, 7];
console.log(b1); //undefined
console.log(c1); //[ 3, 9, 7]

let obj = {
    a: 8,
    b: 2
}
let { b2, a2 } = obj; //undefined porque no son iguales al objeto
console.log("a2: " + a2 + " b2: " + b2); //a2 = undefined; b2 = undefined; 

let obj2 = {
    a3: 8,
    b3: 2
}
let{ b3, a3 } = obj2; //b3 = obj.b3; a3 = obj.a3; //Por su nombre, no por su posición
console.log("a3: " + a3 + " b3: " + b3); //a3 = 8; b3 = 2; 

const a4 = [ 5, 10, 15, 20, 25];
const [ b4, c4 ] = a4; //como no se guía por nombres, toma por posiciónes
console.log(b4); //5

const Book = {
    title: "JavaScript",
    numPages: 300,
    author: {
        name: "El name",
        address: {
            country: "Mexico",
            city: "CDMX"
        }
    }
};
const { 
    author: {
        address: {
            city      //Este es el que declara en si
        } } } = Book;

console.log(city);