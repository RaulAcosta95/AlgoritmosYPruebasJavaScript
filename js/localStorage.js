const innerLocalStorage = document.getElementById('localStorage');

let datosLocalStorage = localStorage.getItem('datoParrafo');
_actualizaHtml();

function _actualizaHtml() {
    if (localStorage.getItem('datoParrafo') == null) {
        datosLocalStorage = "";
    } else {
        datosLocalStorage = localStorage.getItem('datoParrafo');
    }

    innerLocalStorage.innerHTML=`
        <p>Variable localStorage: ${datosLocalStorage}</p>
        <button  onclick="_cambiaInnerLocalStorage()">Cambia variable local storage</button>
    `;
}

function _cambiaInnerLocalStorage() {
    let temp = prompt("Dime tu nombre");
    localStorage.setItem('datoParrafo',temp);
    _actualizaHtml();
}


// ------------------------------------------------------------------
// GUARDAR UN OBJECT O ARREGLO

let alarmasActivas = [];
    localStorage.setItem('alarmasLocalStorage',JSON.stringify(alarmasActivas));
    let arregloAlarmasTemporal = JSON.parse(localStorage.getItem('alarmasLocalStorage')) ;

// ------------------------------------------------------------------

// localStorage.clear(); //AQUI LIMPIA LOCAL STORAGE
// localStorage.removeItem('miGato'); //AQUI LIMPIA UN ITEM DE LOCAL STORAGE
