this.x = 9;//en este scope, this.x es 9
var module = {
  x: 81,
  //dentro de module, this.x es 81
  getX: function() { return this.x; } 
};
module.getX(); // 81
//Aquí se rompe, y getX hace return this.x, el cual es 9
var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global
// Ahora getX hará referencia a module, gracias a bind
var boundGetX = getX.bind(module);
boundGetX(); // 81
// ---------------------------------------------

function list() 
{
    return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3); // [1, 2, 3]

// Crear funcion (sin referencia this) con argumento inicial predeterminado
//Esta variable es la función list() pero con argumentos predeterminados
var leadingThirtysevenList = list.bind(undefined, 37);
//Cuando sea list() (undefined), entonces su valor será por defecto 37
//Cuando se llama a list() sin argumentos, 
// se hace referencia a list.bind
var list2 = leadingThirtysevenList(); // [37] porque se refiere a list.bind
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

// ---------------------------------------------------------
function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
}
// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
    //Tras 1 segundo, this.declare hace referencia a this...
    window.setTimeout(this.declare.bind(this), 1000);
};
LateBloomer.prototype.declare = function() {
    console.log('I am a beautiful flower with ' +
      this.petalCount + ' petals!');
};
// -----------------------------------------------------------------
const test = {
    prop: 42,
    func: function() {
      return this.prop; //prop dentro de test
    },
};

test.func();//42

var o = {prop: 37};

function independent() {
  return this.prop;
}
//Asigna la función para que haga referencia a ese objeto o{}
o.f = independent;
o.f();//37
// --------------------------------------------------------------------
var o = {f:function(){ return this.a + this.b; }};
//Crea un nuevo objeto desde "o"n y le asigna las variables correspondientes a la función
var p = Object.create(o);
p.a = 1;
p.b = 4;
p.f();//5
// -----------------------------------------------------------------------
function modulus(){
    //Devuelve esta operación
    return Math.sqrt(this.re * this.re + this.im * this.im);
}
  
var o = {
    //Un objeto con las propiedades re, im, necesarios en la operación
    re: 1,
    im: -1,
    get phase(){
        return Math.atan2(this.im, this.re);
    }
};

//Resultados esperados
console.log("Atan2: "+ Math.atan2(-1,1));
console.log("Sqrt: " + Math.sqrt(1*1 + -1 * -1))

//Asigna al objeto "o" la propiedad modulus, la cual contiene los datos
// necesarios para la función modulus
Object.defineProperty(o, 'modulus', {get: modulus, enumerable:true, configurable:true});

//Ya tiene la función modulus asignada, por lo que la función modulus usará
// los valores de "o"
console.log(o.phase, o.modulus); // logs -0.78 1.4142