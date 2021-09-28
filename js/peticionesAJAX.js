function traerDatos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','archivo.txt', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            // document.querySelector('#respuestaAJAX').innerHTML = this.responseText;
        }else{
            console.log('AJAX rechazado');
            // document.querySelector('#respuestaAJAX').innerHTML = 'AJAX rechazado';

        }
    }
}

function traerDatosJSON(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'catalogo.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log('This ResponseText: '+this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log('Datos: ');
            console.log(datos);
            return datos;
        }
    }
}

// EJECUTA FUNCIONES
// traerDatos();

console.log('Trae Datos JSON');
console.log(traerDatosJSON());
