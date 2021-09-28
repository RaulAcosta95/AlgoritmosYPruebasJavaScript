//Estructura
let mensaje = "Mi mensaje";
const miPromesa = new Promise((resolve,reject)=>{
    if(mensaje){
        resolve("El mensaje es " + mensaje);
    } else{
        reject("El mensaje no está definido aún");
    }
});

miPromesa.then(resolve =>{
    console.log('Resolve: ' + resolve);
})
.catch(reject =>{
    console.log('Reject: ' + reject);
})

//Casos
let x=0;
setTimeout( () => {
    x=1;
    console.log('Ahora si x = 1');
}, 1000);
console.log('x es :' + x);//3
const miPromesa2 = new Promise( (resolve,reject)=>{
    if (x===1) {
        resolve ('X es igual a ' + x);
    } else{
        reject ('X es igual a ' + x);
    }
});
miPromesa2.then (resolve =>{
    console.log('Resolve ' + resolve);
}).catch(reject => {
    console.log('Reject ' + reject);
})
// --------------------
let x2=0;
console.log('x2 es :' + x2);//3
const miPromesa3 = new Promise( (resolve,reject)=>{
    setTimeout( () => {
        x2=1;
        resolve ('x2 es igual a ' + x2);
        console.log('Ahora si x2 = 1');
    }, 1000);
});
miPromesa3.then (resolve =>{
    console.log('Resolve ' + resolve);
}).catch(reject => {
    console.log('Reject ' + reject);
})