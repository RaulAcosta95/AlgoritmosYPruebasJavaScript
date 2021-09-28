function ObtenerRespuesta(funcion) {
    // console.log('Ejecutando ObtenerRespuesta...');
    let respuesta = funcion();
    // console.log('La respuesta es: ' +respuesta);
}

function Respuesta(){
    // console.log('Ejecutando Respuesta...');
    return "Esta es la respuesta del servidor";
}

ObtenerRespuesta(Respuesta);







function funcionExterna() {
    const variableFuncion = (a,b) => { return a*b; } //función callback
    const variableFuncion2 = function name(a,b) { return a+b; } //función callback

    let resultado = variableFuncion(5,10);
    // console.log('Resultado de variable Funcion: '+resultado);

    let resultado2 = variableFuncion2(5,10);
    // console.log('Resultado de variable Funcion2: '+resultado2);

}
funcionExterna();












function funcionExterna2(funcionParametro){
    const variableFuncion = funcionParametro;
    let resultado = variableFuncion(5,10);
    console.log('Resultado de funcionExterna2: '+resultado);
}

funcionExterna2(multiplicaDosNumeros);
funcionExterna2(divideDosNumeros);

function multiplicaDosNumeros(x1,x2){
    return x1*x2;
}

function divideDosNumeros(b1,b2){
    return b1/b2;
}