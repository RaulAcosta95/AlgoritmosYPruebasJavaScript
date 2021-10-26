console.log(Math.floor(7.3)); //7
console.log(Math.ceil(7.3)); // el entero mayor o igual más próximo a un número dado.
console.log(Math.round(7.3)); //7
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
console.log("" && "3"); // "" ...????
console.log(6 && 8); //8 ...????
console.log(false || 5); //5 ... ???
console.log("Hola" || "Mundo"); //Hola
console.log(0 === 0.00); //Valor y tipo... no etiendo, da true
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