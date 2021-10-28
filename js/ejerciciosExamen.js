// let myFunc = function(x,y=2,z=7){
//     return (x+y+z)
// }
// console.log(myFunc(1)===10);

// let x= "4"+4+5;
// let y  = 4+4+ "5";
// console.log(x+""+y);

//console.log(event.composedPath{}[0]);

// (function f(f){
//     console.log(typeof f);
// }) function x (){
//     return 1;
// }

// function fool(){
//     console.log(a);
// }
// function x(){
//     fool();
//     var a = 2;
// }
// var a = 3;
// x();

// let dog = {
//     breed: "Border collie",
//     sound: "Wooh",
//     getBreed: ()=>{
//         return this.breed;
//     },
//     getSound: function(){
//         return this.sound;
//     }
// }
// console.log(dog.getBreed(),
// dog.getSound()
// );



// (
//     function() {
//         console.log("1. inicio");
//         var promise = new Promise ((resolver, rechazar) =>{
//             console.log("2. Dentro de promesa");
//             resolver();
//         });
//         promise.then(() => {throw new Error('4. algo falló');console.log('5. despues del error');
//         }).catch (() => { console.log('6. Manejando el error');
//     }).then (() => { console.log('7. despues tempesatad');
// });
// let resolver = () => { console.log("3. procesando resultados");
// } } )();

const myFunc = str => {
    if (str.length > 1) {
        return myFunc ( str.slice(1));
    }
    return str;
};
console.log( myFunc('Hello Word'));




































