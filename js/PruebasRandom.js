console.log(Math.floor(7.3)); //7 hacia abajo
console.log(Math.ceil(7.3)); // 8 hacia arriba
console.log(Math.round(7.4)); //7 mas cercano
console.log((2.5).toFixed(2)); //2.50
console.log((15).toString(2)); //Algo de que eleva al exponencial... 111
console.log((10).toString(2)); //Algo de que eleva al exponencial... 111

console.log(parseInt("xyz")); //NaN
console.log(-10/0); //-Infinity
console.log(+"xyz"); //NaN
console.log(parseInt("10xyz")); //10
console.log(parseInt("1010",3)); //10 Ni idea porqué
console.log(parseInt("xyz")); //NaN
console.log(!!null); //False

// && Busca el primer valor False, si no, el último valor True
// || Busca el primer valor true, si no, el último valor False

console.log(false < true); //True ...????
console.log("" && "3"); // "" 
console.log(6 && 8); //8 
console.log(false || 5); //5 ... ???
console.log("Hola" || "Mundo"); //Hola
console.log(0 === 0.00); //Valor y tipo true number ambos

console.log(typeof true); //boolean


var f = ( //Creo que ejecuta la última que encuentre
            function f(){ 
                console.log('primera funcion'); //Esto no
                return "1"; 
            },
            function g(){ 
                console.log('segunda funcion'); //Esto se ejecuta
                return 2; //Retorna esto
            }
        ) ();

console.log(typeof f);
console.log(f);

var variableMultipleLinea = 'Primera Línea \
                            Segunda Línea\
                            Ultima Línea';
console.log(variableMultipleLinea);

console.log(typeof NaN);//Number
console.log(typeof undefined);//Undefined
console.log(typeof null);//Object
console.log(typeof !!undefined); //boolean (false)


var d = parseFloat("34 45 66"); //toma lo primero que pueda convertir
console.log(d + " Type: " + typeof d); //34 Number
var f = parseInt("40 years") + "<br>"; //40<br>
console.log(f + " Type: " + typeof f); //String
var oo = String(23);
console.log(oo + " Type: " + typeof oo); //String

                                //number        //String
var ConcatenaOSuma =  3 + 2 + '7'; //3+2 = 5 + "7" = 57 String
console.log("ConcatenaOSuma: " + ConcatenaOSuma + "typeof: " + typeof ConcatenaOSuma);
                                //String
var ConcatenaOSuma2 =  "3" + 2 + 7; //"3"+"2" = "32" + "7" = 327 String
console.log("ConcatenaOSuma2: " + ConcatenaOSuma2 + "typeof: " + typeof ConcatenaOSuma2);

document.write ("Bienvenido"); //Escribe en el DOM
document.write ("<h2>Pruebas JavaScript</h2>"); //Acepta etiquetas

variableNoDeclarada = 4;
console.log("Variable No Declarada" + variableNoDeclarada); //4

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
