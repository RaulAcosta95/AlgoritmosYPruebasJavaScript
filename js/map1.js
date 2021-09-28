// MAP
const arreglo = [1, 2, 3];
console.log('arreglo: '+arreglo);
const arregloMap = arreglo.map(function(elemento){
    return elemento + 5;
})
console.log('arregloMap: '+arregloMap);

// REDUCE
const array1 = [1, 2, 3, 4];
console.log('array1: '+array1);
const array1Reducido = array1.reduce( function(primero, segundo){
    // 1 + 2 + 3 + 4
    return primero + segundo;
} )
console.log('arrayReducido: '+array1Reducido);// expected output: 10
    

// FILTER
const arregloFiltrado = arreglo.filter(function(elemento){
    return elemento !== 1;
});
console.log('arregloFiltrado !== 1 : ' + arregloFiltrado);

// Variables que no se alteran
const conoceAutor = function(){
    return 'Hola Kealan'
}

const myStringConoceAutor = conoceAutor();
console.log('Variables que no se alteran: '+myStringConoceAutor);

// FUNCIÓN RECURSIVA
function recurrir(inicio, fin){
    if (inicio == fin) {
        console.log('recurrir FIN: '+fin)
        return;
    } else {
        console.log('recurrir Inicio: '+inicio)
        return recurrir(inicio+1, fin)
    }
}

recurrir(5, 10);
// CURRING
function currySuma(primerNum){
	return function(segundoNum){
            return primerNum + segundoNum;
    }
}

let suma10 = currySuma(10)(2);
console.log('Función Curring: '+suma10);

let suma20 = currySuma(20);
suma20(2); // Returns 22
console.log('Función Curring: '+suma20(2));

// FUNCIONES COMPUESTAS

// Si tenemos esta dos funciones
function funSuma10(num) {
	return num + 10;
}
function funSuma100(num) {
    return num + 100;
}

// Podemos componer estas dos a lo siguiente =>
function compuesta(num){
    //(1+100) + 10
	return funSuma10(funSuma100(num));
}

compuesta(1) // Retorna 111
console.log('Función compuesta: '+compuesta(1));