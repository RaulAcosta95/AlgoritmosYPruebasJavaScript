var f = (function f(){ 
    console.log('Ejecuta1?');
    return "1"; 
}, function g(){ 
    console.log('Ejecuta2?');
    return 2; 
}, function g(){ 
    console.log('Ejecuta3?'); //Solo se ejecuta esto
    return 3; }
    )();
console.log(f); //Auto Ejecutada