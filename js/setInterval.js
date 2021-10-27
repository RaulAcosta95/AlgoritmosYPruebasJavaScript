let segundos = 0;
setInterval(() => {
    // console.log('Segundos: ' + segundos);
    segundos++;
}, 1000);

// var handle = setInterval(console.log("Una Función"), 2000);

var handle2 = setInterval(() => {
    console.log("Otra Función")
    if (segundos == 10) {
        // Para Cancelar
        clearInterval(handle2);
    }
}, 1000);

// handle2 = 0;