console.log(undefined); //Undefined
console.log(!undefined); //true
console.log(null); //null
console.log(!null); //true
console.log(1); //1
console.log(!1); //false
console.log(0); //0
console.log(!0); //true (0 es false)

var libro = {
    titulo:'Las Legiones Malditas',  
    autor:'Santiago Posterguillo',
    informacion:function (){ return this.titulo + " escrito por " + this.autor; }
}

console.log(typeof libro); //Object
console.log(typeof libro.informacion); //function
console.log(typeof libro.informacion()); //String (ejecución)

let intentos = [ 1, 5, 10, 15, 20];
console.log( intentos[5]);