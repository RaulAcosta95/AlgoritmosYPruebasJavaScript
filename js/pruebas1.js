console.log('Entorno de Pruebas');
// ------------------------------------------

// -------------------------------------------
// Array
let myNestedArray = [
  // Cambia solo el código debajo de esta línea
 [
   [
     [
       ["a"]
     ]
   ]
 ]
  // Cambia solo el código encima de esta línea
];
function filteredArray(arr, elem) {
  let newArr = [];
  // Cambia solo el código debajo de esta línea
  console.log(arr.length);
for(let i=0;i<arr.length;i++){
  // console.log(arr[i].indexOf(elem))
  if(arr[i].indexOf(elem)>-1){
    newArr.push(arr[i])
  }
}
  // Cambia solo el código encima de esta línea
  return newArr;
}

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// ----------------------------------------------
function copyMachine(arr, num) {
  console.log("arr:"+arr);
  let newArr = [];
  while (num >= 1) {
    // Cambia solo el código debajo de esta línea
    newArr.push([arr])
    // console.log("newArr"+newArr);
    // Cambia solo el código encima de esta línea
    num--;
  }
  return newArr;
}

// console.log(copyMachine([true, false, true], 2));
// --------------------------------------------
// Expresiones regulares

let hello = "   Hello, World!  ";
let wsRegex = / ^\s+|\s+$ /g; // Cambia esta línea

// console.log(hello.match(wsRegex));
let result6 = hello.replace(wsRegex,""); // Cambia esta línea
              hello.replace(wsRegex, "");
// console.log(result6);

// Utiliza los grupos de captura en reRegex para que coincida 
// con una cadena que conste sólo del mismo número repetido 
// exactamente tres veces separado por espacios.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Cambia esta línea
let result5 = reRegex.test(repeatNum);
// console.log(result)
// Lookahead

// Utiliza los lookaheads en el pwRegex para que coincida 
// con las contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Cambia esta línea
let result4 = pwRegex.test(sampleWord);

let password = "abc123";
let checkPass = /(?=[a-z]{3,6})(?=[^0-9]*[0-9])/;
checkPass.test(password);
// console.log(checkPass.test(password));
// console.log(password.match(checkPass));

// Restringe posibles nombres de usuario
// Los nombres de usuario se utilizan en todas partes en Internet. 
// Son los que dan a los usuarios una identidad única en tus sitios favoritos.

// // Se necesita comprobar todos los nombres de usuario en una base de datos. 
// Estas son algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

// // Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

// // Los únicos números del nombre de usuario tienen que estar al final. +
// Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.

// // Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

// // Los nombres de usuario deben tener al menos dos caracteres. 
// Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.

// // Cambia la expresión regular userCheck para que se ajuste a
//  las restricciones indicadas anteriormente.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+[0-9]*$|^[a-z][0-9][0-9]+$/i; // Cambia esta línea
let result3 = userCheck.test(username);


let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Cambia esta línea
let result2 = quoteSample.match(alphabetRegexV2).length;

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
// console.log(soccerWord.match(/go*/));
// console.log(gPhrase.match(/go*/));
// console.log(oPhrase.match(/go*/));
// Expresión regular con match y test
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
let extrae = ourStr.match(ourRegex);
// console.log(extrae);

let myString = "freeCodeCamp";
let fccRegex = /Freecodecamp/i; // Cambia esta línea
let result = fccRegex.test(myString);
// console.log(result);
// -------------------------------------------
// Intercambio
let a = 8, b = 6;
// Cambia solo el código debajo de esta línea
[a,b] = [b,a];
// console.log(a+""+b);
// ------------------------------------------
// Hemos definido una función llamada rangeOfNumbers con dos parámetros. 
// La función debe devolver un arreglo de enteros que comienza con el número 
// representado por el parámetro startNum y termina con el número representado 
// por el parámetro endNum. El número inicial será siempre menor o igual que el 
// número final. Tu función debe utilizar recursión, llamándose a sí misma, y no 
// utilizar bucles de ningún tipo. También debe funcionar en el caso que startNum 
// y endNum sean iguales.
// Recursiva
function rangeOfNumbers(startNum, endNum) {
    if(startNum<= endNum){
      const arr= rangeOfNumbers(startNum+1, endNum);
      arr.unshift(startNum);
      return arr;
  
    }else{ 
    return [];
    }
  };
// Recursiva
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
//   console.log(countup(5));
// ------------------------------------------
// operador condicional (ternario)
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
  }
// ------------------------------------------

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
//   console.log(randomRange(10,5));   
// --------------------------------------------
// Configuración
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  console.log(name +" "+ prop);

  for(var i=0;i<contacts.length;i++){
      console.log(contacts[i]);
      console.log(contacts[i].firstName);

    if(name==contacts[i].firstName){
        console.log('Nombre encontrado');
        if (prop=="firstName"||prop=="lastName"||prop=="number"||prop=="likes") {
            console.log(prop+":"+contacts[i][prop]);
            return contacts[i][prop];
        } else{
            return "No such property"
        }
        
    }
    
}
console.log('No such contact');
return "No such contact"
}

// lookUpProfile("Kristian", "lastName");
// -------------------------------------------
// Recursiva
function sum(arr, n) {
    // Cambia solo el código debajo de esta línea
    // sum([1], 0) =0
    // sum([2, 3, 4], 1) = 2
    // sum([2, 3, 4, 5], 3) = 9
    if (n<=0) {
        return 0;
    }else {
        return sum(arr, n-1) + (arr[n-1])
    }
    // Cambia solo el código encima de esta línea
  }
function multiply(arr, n) {
    var nose;
    if (n <= 0) {
      nose= 1;
    } else {
        console.log('???');
        console.log(multiply(arr, n - 1)+arr[n - 1]);
      nose= multiply(arr, n - 1) * arr[n - 1];
    }
    return nose;
  }
//   console.log( multiply([2, 3, 4, 5],3));
 
// --------------------------------------------
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
// -------------------------------------------
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
// --------------------------------------------
var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
    //   console.log(arr[i][j]);
    }
  }
// ---------------------------------------------
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
// ---------------------------------------------
// Setup
var myArray = [];

// Only change code below this line
var i=5;
while(i>=0){
  myArray.push(i);
  i--;
//   console.log('--')
}
// console.log(myArray)
// -------------------------------------------

// Record Collection
// You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

// You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire record collection object.
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.
// Note: A copy of the recordCollection object is used for the tests.

// After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA

// Passed
// After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last element.

// Passed
// After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set

// Passed
// After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.

// Passed
// After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.

// Passed
// After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set

// Passed
// After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide
// Configuración
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Cambia solo el código debajo de esta línea
  function updateRecords(records, id, prop, value) {
       if (prop !== 'tracks' && value !== "") {
          records[id][prop] = value;
      } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
          records[id][prop] = [value];
      } else if (prop === "tracks" && value !== "") {
         
          records[id][prop].push(value);
      } else if (value === "") {
          delete records[id][prop];
      }
    
      return records;
  }
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');