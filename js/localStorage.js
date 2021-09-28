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


