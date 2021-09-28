console.log('Algoritmos Simples');
// Observa el tipo de objeto
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
let verificoObjetoConstructor = new Dog ("firuralys");
      //Si es una instancia de Dog
// console.log(verificoObjetoConstructor.constructor);
// console.log(verificoObjetoConstructor.constructor === Dog);

// Divide un arreglo en n partes y lo devuelve fraccionado

function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % size !== size - 1) {
          temp.push(arr[i]);
        }else {
            temp.push(arr[i]);
            result.push(temp);
            temp = [];
        }
    }
    if (temp.length !== 0) {
        result.push(temp);
    }
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d","e"], 2);
  console.log(chunkArrayInGroups(["a", "b", "c", "d","e"], 2));
// identifica si los valores de una cadena aparecen en otra cadena

  
  function mutation(arr) {
    let primArr= arr[0].toLowerCase();
    let secArr= arr[1].toLowerCase();
   
     for (let i = 0; i < secArr.length; i++) {
       if (primArr.indexOf(secArr[i]) < 0) {
           return false;
       }
   }
   return true
     }
  mutation(["hello", "Hello"])

// Ordena y devuelve la posición donde debe ir ese valor
function getIndexToIns(arr, num) {
    arr.push(num);
    let temp;
    let flag=true;
    while(flag){
        flag=false;
        for(let i = 0; i<arr.length;i++){
            if (arr[i]>arr[i+1]) {
                temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                flag=true;
            }
        }
    }
    return arr.indexOf(num);
  }
  

  getIndexToIns([10, 20, 30, 40, 50], 35)
// Elimina todos los valores falsos
function bouncer(arr) {
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr;
  }
  
  bouncer([7, "ate", "", false, 9]);
// Introduce un arreglo en otro arreglo a partir de la posición dada
function frankenSplice(arr1, arr2, n) {
    //0 para que no reemplace ninguno!!
    let temp=arr2.slice();
    temp.splice(n,0,...arr1);
    return temp;
  }

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Devuelve cada primera letra a mayusculas
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  
  titleCase("I'm a little tea pot");
// Identifica si un parametro es de algún tipo
function booWho(bool) {
    let type= typeof bool;
    if(type == "boolean"){
    return true;
    }
    else {
      return false;
    }
  }
  
  booWho(false);
// Compara la longitud de una cadena
function truncateString(str, num) {
    let newStr;
    if(str.length>num){
      newStr = str.slice(0,num)
      newStr +="...";
    }else{
      newStr= str;
    }
    return newStr;
  }
// Concatena una cadena n veces
function repeatStringNumTimes(str, num) {
    let newStr="";
    for(let i=0;i<num;i++){
      newStr +=str;
    }
    return newStr;
  }
  
  repeatStringNumTimes("*", 3);
// Confirma que el ultimo caracter sea igual al dado en la función
function confirmEnding(str, target) {
    return str.slice(-target.length) === target
    return str;
  }
  
  confirmEnding("Bastian", "n");
// Extrae el arreglo con los valores más altos
function largestOfFour(arr) {
    let maxActual=0;
    let arrMax=[]
    for(let i=0;i<arr.length;i++){
        maxActual=arr[i][0];
      for(let x=0; x<arr[i].length;x++){
        if (arr[i][x]>maxActual) {
            maxActual=arr[i][x];
        }
      }
      arrMax.push(maxActual);
      maxActual=0;
    }
    return arrMax;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])  
  // Extrae la longitud de la palabra mas larga
function findLongestWordLength(str) {
    let arr=str.split(" ");
    let max=0;
    for(let i=0; i<arr.length;i++){
      if(arr[i].length>max){
        max=arr[i].length;
      }
    }
    return str.length;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Factoriza
function factorialize(num) {
    let temp=1;
    for(let i=1;i<=num;i++){
      temp *=i;
    }
    return temp;
  }
  
  factorialize(5);
  // Invertir una cadena
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  reverseString("hello");

  // Calcula Años, Meses, días vividos
  // Obten días dias vividos
function calculaAñosMesesDiasVividos(dias){
  const años = Math.floor(dias/365);
  const meses = Math.floor( (dias - (años*365) ) / 30 );
  const diasRestantes = dias - ((años*365) + (meses*30));

  const arr=['Años: '+años, 'Meses: '+meses, 'Dias: '+diasRestantes];
  return arr;
}
// console.log(calculaAñosMesesDiasVividos(9719));

// Obten la distancia entre dos números numeros
// Distancia entre dos puntos
function obtenDistanciaDosNumeros(x1,y1,x2,y2){
  return  Math.sqrt( obtenBinomioCuadrado(x1,x2) + obtenBinomioCuadrado(y1,y2))
}
// console.log("Distancia (3,1)(7,6): "+obtenDistanciaDosNumeros(3,1,7,6));
// console.log("Distancia (3,1)(3,8): "+obtenDistanciaDosNumeros(3,1,3,8));

// Obten el binomio cuadrado de dos numeros
function obtenBinomioCuadrado(a,b){
  return  (a*a) -(2*(a*b)) + (b*b) 
}
// console.log(obtenBinomioCuadrado(3,1));