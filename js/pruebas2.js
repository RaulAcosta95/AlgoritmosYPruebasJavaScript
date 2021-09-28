
// Análisis de comparación
let unValor=0;
let otroValor=0;
let valorDiferente="0";
// console.log(unValor==otroValor);
// console.log(unValor===otroValor);
// console.log(valorDiferente==unValor);
// console.log(valorDiferente===unValor);//Triple igual verifica que sea del mismo tipo
// Comprobación de arrays
let arrayWey=["Manzana", "Banana"];
// console.log(arrayWey);
// console.log(typeof arrayWey);
// console.log("LOS ARRAY SON TIPO OBJETO");

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