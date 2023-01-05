arr = [6,4,15,10].sort(bigToSmall);
console.log(arr);
arr = arr.sort(lowToHi);
console.log(arr);

function bigToSmall(num1, num2){

    return num1 -num2;



}




function lowToHi(num1, num2){

    return num2 -num1;



}

