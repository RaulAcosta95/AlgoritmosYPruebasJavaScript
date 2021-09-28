let datos="Estos son los datos";
const getDatos = () => {
    return new Promise( (resolve,reject) => {
        if (datos) {            
            setTimeout(() => {
                resolve (datos)
            }, 1200);
        }
        else {
            setTimeout(() => {
                reject ('No se encontraron datos')
            }, 1200);
        }
    });
}
async function obtenerData(){

    try {
        const obtenDatos = await getDatos(); //Espera a que se resuleva la promesa de esta función.
        console.log('DATOS: ' + obtenDatos);
    } catch (error) {
        console.log('ERROR: ' + error);
    }
}
obtenerData();