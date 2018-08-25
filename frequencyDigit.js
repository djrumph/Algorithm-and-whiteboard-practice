// Given two positive integers find out if the two numbers have the same frequency of digets.

function sameFrequency(num1, num2){
  
let  arr1= numberToArray(num1);
let arr2 = numberToArray(num2);

let obj1 = arryToObject(arr1);
let obj2 = arryToObject(arr2);



    if(arr1.length != arr2.length){
        return false;
    }

    for (let val in obj1){


        if(obj1[val] !== obj2[val]){
            return false;
        }
    }


    return true;
}

function numberToArray(num){
let    output = [];
let    sNumber = num.toString();

for (let i = 0, len = sNumber.length; i < len; i ++) {
    output.push(+sNumber.charAt(i));
}

return output;

}

function arryToObject (arr){

  let  ob ={};

for(let val of arr){

  
        ob[val] = (ob[val] || 0) + 1;
    
    
}

return ob;


}
