// =============================================================================
// Sum All Numbers in a RangePassed
// We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all 
// the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {
    let minInicial=Math.min(...arr);
    let maxInicial=Math.max(...arr);
    let suma=0;
    while (minInicial<=maxInicial) {
        suma +=minInicial;
        minInicial++;
    }
    return suma;
  }
//   console.log( sumAll([4, 1]));
// =============================================================================

// Diff Two ArraysPassed
// Compare two arrays and return a new array with any items only found 
// in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.map(function(valorDelArray1){
        if(arr2.indexOf(valorDelArray1)<0){
            newArr.push(valorDelArray1)
        } 
    });
    arr2.map(function(valorDelArray2){
        if(arr1.indexOf(valorDelArray2)<0){
            newArr.push(valorDelArray2)
        } 
    })
    return newArr;
  }
  
  diffArray([1, 2, 'oo', 3, 7, 5], [1, 2, 3, 4, 5]);
// =============================================================================

//   Seek and DestroyPassed
// You will be provided with an initial array 
// (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
    for (let i = 1; i < arguments.length; i++) {
        for (let x = 0; x <= arr.length; x++) {
            if(arr.indexOf(arguments[i])>=0){
                arr.splice(arr.indexOf(arguments[i]), 1)
            }
        }
    }
    return arr;
}
destroyer([2, 3, 2, 3], 2, 3)
// =============================================================================
