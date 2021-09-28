console.log('Algoritmos Intermedios');
// Caja Registradora
function checkCashRegister(price, cash, cid) {
  let cidRestante = 0;
  let cambio = cash - price;
  const CANTIDAD = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  for (let element of cid) {
    cidRestante = cidRestante+element[1];
  }
  cidRestante = cidRestante.toFixed(2);
  const cambioDado = [];
  if (cambio > cidRestante) {
    return { status: "INSUFFICIENT_FUNDS", change: cambioDado };
  } else if (cambio.toFixed(2) === cidRestante) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (cambio >= CANTIDAD[elem[0]] && elem[1] > 0) {
        temp[1] += CANTIDAD[elem[0]];
        elem[1] -= CANTIDAD[elem[0]];
        cambio -= CANTIDAD[elem[0]];
        cambio = cambio.toFixed(2);
      }
      if (temp[1] > 0) {
        cambioDado.push(temp);
      }
    }
  }
  console.log(cambioDado);
  if (cambio > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: cambioDado};
}

console.log(0.5%0.5)
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5],  ["NICKEL", 0],    ["DIME", 0],   ["QUARTER", 0],    ["ONE", 0],  ["FIVE", 0],  ["TEN", 0],  ["TWENTY", 0],  ["ONE HUNDRED", 0]]));


// Valida que un número sea
// Devuelve true si la cadena pasada concuerda con un 
// número de teléfono válido en Estados Unidos.
function telephoneCheck(str) {
  // Good luck!
  let regex = /^([1]\s?)?(\([0-9]{3}\)|[0-9]{3})(\s|-)?[0-9]{3}(\s|-)?[0-9]{4}$/g;
  return regex.test(str);
  
}
// Desplaza 13 espacios cada caracter
function rot13(str) {
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
   var index     = x => input.indexOf(x);
   var translate = x => index(x) > -1 ? output[index(x)] : x;
   return str.split('').map(translate).join('');
 }

rot13("SERR PBQR PNZC");
// Desplaza 13 espacios cada caracter
function rot13(str) {
  let newStr=[];
  for (let i = 0; i < str.length; i++) {
      newStr[i]=str[i];
      switch (newStr[i]) {
          case "A": newStr[i]="N"; break;
          case "B": newStr[i]="O"; break;
          case "C": newStr[i]="P"; break;
          case "D": newStr[i]="Q"; break;
          case "E": newStr[i]="R"; break;
          case "F": newStr[i]="S"; break;
          case "G": newStr[i]="T"; break;
          case "H": newStr[i]="U"; break;
          case "I": newStr[i]="V"; break;
          case "J": newStr[i]="W"; break;
          case "K": newStr[i]="X"; break;
          case "L": newStr[i]="Y"; break;
          case "M": newStr[i]="Z"; break;
          case "N": newStr[i]="A"; break;
          
          case "Ñ": newStr[i]="B"; break;

          case "O": newStr[i]="B"; break;
          case "P": newStr[i]="C"; break;
          case "Q": newStr[i]="D"; break;
          case "R": newStr[i]="E"; break;
          case "S": newStr[i]="F"; break;
          case "T": newStr[i]="G"; break;
          case "U": newStr[i]="H"; break;
          case "V": newStr[i]="I"; break;
          case "W": newStr[i]="J"; break;
          case "X": newStr[i]="K"; break;
          case "Y": newStr[i]="L"; break;
          case "Z": newStr[i]="M"; break;
          default:
              break;
      }
  }
  newStr=newStr.toString();
  newStr=newStr.replace(/,/g,"");
  // console.log(newStr);
  return newStr;
}

rot13("SERR PBQR PNZC");
// Convierte a numeros romanos
function convertToRoman(num) {
  let numRomano;
  if (!+num){
    return false;
  }
  let digits = String(+num).split(""),
          romans = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                "","I","II","III","IV","V","VI","VII","VIII","IX"],
          roman = "",
  i = 3;
  while (i--){
    roman = (romans[+digits.pop() + (i * 10)] || "") + roman;
  }
  numRomano = Array(+digits.join("") + 1).join("M") + roman;
  console.log(numRomano);
  return numRomano
}

 convertToRoman(36);

// Comprueba palindromos
function palindrome(str) {
  var sanitized = str.replace(/\W+|_/gi, "" ).toLowerCase();
  return sanitized === sanitized.split("").reverse().join("");
}

// console.log(palindrome("0_0 (: /-\ :) 0-0"));
 

palindrome("0_0 (: /-\ :) 0-0")
// 
// Devuelve un nuevo arreglo que transforma la altitud media de los elementos 
// en sus periodos orbitales (en segundos).
// El arreglo contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.
// Puedes leer sobre los períodos orbitales en Wikipedia.
// Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.
// El radio de la tierra es de 6367.4447 kilómetros y el valor GM de la tierra es 
// de 398600.4418 km3s-2.
function orbitalPeriod(arr) {
  const constanteGrabitacional = 398600.4418;
  let radioTierra = 6367.4447;
  return arr.map((elem)=>{
    return {
      name:elem.name,
            orbitalPeriod:Math.round(
              (2*Math.PI)*Math.sqrt(
                Math.pow(radioTierra+elem.avgAlt,3)/constanteGrabitacional))
    }
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//Completa el constructor de objetos con los siguientes métodos:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Ejecuta las pruebas para ver el resultado esperado para cada método. 
// Los métodos que toman un argumento deben aceptar sólo un argumento y tiene que ser una cadena. 
// Estos métodos deben ser el único medio disponible para interactuar con el objeto. 
var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  this.getFirstName = ()=> {
    return fullName.split(" ")[0];
  };
  this.getLastName = ()=> {
    return fullName.split(" ")[1];
  };
  this.getFullName = ()=> {
    return fullName;
  };
  this.setFirstName = (name) => {
    fullName = name + " " + fullName.split(" ")[1];
  };
  this.setLastName = (name) => {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  this.setFullName = (name) => {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();


// Crea una función que sume dos argumentos. 
// Si sólo se proporciona un argumento, entonces devuelve una función que 
// espera un argumento y devuelve la suma.
// Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.
// Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) devuelve 5.
// Si cualquiera de los dos argumentos no es un número válido, devuelve undefined.
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}

// test here
addTogether(2, 3);

// Comprueba si el predicado (segundo argumento) es truthy en todos los 
// elementos de una colección (primer argumento).
// En otras palabras, se te da una colección de arreglos de objetos. 
// El predicado pre será una propiedad del objeto y debe devolver true si su valor es truthy. 
// De lo contrario, devuelve false.
// En JavaScript, los valores truthy son valores que se traducen en true cuando se 
// evalúan en un contexto booleano.
// Recuerda, puedes acceder a las propiedades del objeto mediante la notación 
// de puntos o la notación de corchetes [].
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
// Traduce una cadena binaria al alfabeto
function binaryAgent(str) {
  let cadena;
  return String.fromCharCode(
    ...str.split(" ").map((caracter) => {
      return parseInt(caracter, 2);
    })
  );
}
// console.log(
//   binaryAgent(
//   "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// ));

// Aplana un arreglo anidado. Tiene en cuenta los diferentes niveles de anidación.
function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) {
      steamrollArray(item, flatArr);
    }
      else {
        flatArr.push(item);
      }
  });
  return flatArr;
}
steamrollArray([1, [2], [3, [[4]]]]);
//  itera y elimina cada elemento comenzando desde el primer 
// elemento (el índice 0) hasta que la función func devuelva true 
// cuando el elemento iterado se pasa a través de él.
// Luego devuelve el resto del arreglo una vez que se cumpla la condición, 
// de lo contrario, arr debe devolverse como un arreglo vacío.
function dropElements(arr, func, i = 0) {
  if(i < arr.length && !func(arr[i])){
    return (dropElements(arr.slice(i + 1), func, i))
  }else{
    return arr;
  }
}
// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

// Encuentra el múltiplo común más pequeño de los parámetros 
// proporcionados que pueden dividirse equitativamente por ambos, 
// así como por todos los números consecutivos del rango entre estos parámetros.
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}
smallestCommons([1, 5]);


// Suma de todos los numeros primos menores o guales al atributo
function sumPrimes(num) {
  let prim = [];
  for (let i = 2; i <= num; i++) {
    if (prim.every((prim2) => i % prim2 !== 0))
      prim.push(i);
  }
  num = prim.reduce((sum, prim2) => sum + prim2, 0);
  return num;
}

// devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.
// Los dos primeros números en la secuencia de Fibonacci son 1 y 1. 
// Cada número adicional en la secuencia es la suma de los dos números anteriores. 
// Los seis primeros números de la secuencia de Fibonacci son 1, 1, 2, 3, 5 y 8.
// Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números 
// impares de Fibonacci menores o iguales a 10 son 1, 1, 3 y 5.

function sumFibs(num) {
  let ant = 0;
  let act = 1;
  let resSum = 0;
  while (act <= num){
    if (act % 2 !== 0){
      resSum += act;
    }
    act += ant;
    ant = act - ant;
  }
  // console.log(resSum);
  return resSum;
}

// test here
sumFibs(4);

// Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), 
// en un cadena con su correspondiente entidad HTML.
function convertHTML(str) {
    const ent = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    return str.replace(/([&<>\"'])/g, match => ent[match]);
  }
  // test here
  convertHTML("Dolce & Gabbana");
// Identifica los valores del arreglo y devuelve un arreglo con esos valores
function uniteUnique(arr) {
    var newArr = [...arguments];
    var result = [];
    for (var i = 0; i < newArr.length; i++) {
      for (var x = 0; x < newArr[i].length; x++) {
        if (!result.includes(newArr[i][x])) {
          result.push(newArr[i][x]);
        }
      }
    }
    return result;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// Encuentra la letra faltante
function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {//charCodeAt() busca en tabla ASCII
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  }
  
  // test here
  fearNotLetter("abce");

// Toma cada carácter, obtén su par y devuelve los resultados como un arreglo bidimensional.
// Par de bases son un par de AT y CG. Haz coincidir el elemento que falta con el carácter proporcionado.
// Devuelve el carácter proporcionado como primer elemento de cada arreglo.
// Por ejemplo, la entrada GCG, devolverá [["G", "C"], ["C","G"], ["G", "C"]]
// El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.
function pairElement(str) {
    let pares = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    let newArr = str.split("");
    return newArr.map(x => [x, pares[x]]);
  }
  
  pairElement("GCG");
// Reemplaza la palabra dada de la oración
function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {//Letra mayusc
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
    let newStr= str.replace(before, after);
    // console.log(newStr);
    return newStr;
  }

  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");

// - Si una palabra comienza con una consonante, toma la primer consonante o 
// grupo de consonantes, muévela al final de la palabra, y añade "ay" a ella.
// - Si una palabra comienza con una vocal, solo añade "way" al final.
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) {//Empieza consonante
        return str + "way";
    }else{
        const consonantCluster = str.match(/^[^aeiou]+/)[0]; //primerConsonante
        return str.substring(consonantCluster.length) + consonantCluster + "ay";
    }
  }
  translatePigLatin("consonant");
// Convierte una cadena a spinal case. 
// Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.
function spinalCase(str) {
    // Identifica todos los espacios y guiones bajos
    var espaciosG = /\s+|_+/gi;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    // console.log(str.replace(espaciosG, "-").toLowerCase());
    return str.replace(espaciosG, "-").toLowerCase();
  }
  
  spinalCase("This Is Spinal Tap");

// Encuentra el objeto que coincida con un valor del segundo argumento
function whatIsInAName(collection, source) {
    let srcKeys = Object.keys(source);
    // console.log(srcKeys);
    // filter the collection
    let result = collection.filter((obj)=> {
        for (let i = 0; i < srcKeys.length; i++) {
          if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]){
            return false;
          }
        }
        return true;
      })
    //   console.log(result);
    return result;
  }
  whatIsInAName([
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
    ], 
    { last: "Capulet" });
// Elimina los valores pasados como parametros a un arreglo pasado como parámetro
function destroyer(arr) {
    let arrDel = Object.values(arguments).slice(1); //obtén los argumentos que están a continuación
    for (let i = 0; i < arr.length; i++) {
      for (let x = 0; x < arrDel.length; x++) {
        if (arr[i] === arrDel[x]) {
        delete arr[i];
        }
      }
    }
    arr= arr.filter(item => item !== null);
    // console.log('resultado:'+arr);
    return arr;
  }
  destroyer([3, 5, 1, 2, 2], 2, 3, 5)

// Devuelve la diferencia asimetrica
function diffArray(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
          newArr.push(arr1[i]);
        }
      }
    for (let x = 0; x < arr2.length; x++) {
        if (arr1.indexOf(arr2[x]) === -1) {
            newArr.push(arr2[x]);
        }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Devuelve la suma de estos dos números más la suma de todos los números entre ellos.
function sumAll(arr) {
    let max=Math.max(arr[0],arr[1]);
    let min=Math.min(arr[0],arr[1]);
    let sum=0;
    for(let i=min;i<=max;i++){
        sum +=i;
    }
    return sum;
  }
  
  sumAll([1, 4]);