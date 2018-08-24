// Given two positive integers find out if the two numbers have the same frequency of digets.

//still working on it
function numberToArray(num){
    output = [],
    sNumber = num.toString();

for (var i = 0, len = sNumber.length; i < len; i ++) {
    output.push(+sNumber.charAt(i));
}

return output;

}

function arryToObject (arr){

    ob ={};

for(val of arr){

    if(!ob[val]){
        ob[val] = (ob[val] || 0) + 1;
    }
}

return ob;


}

function sameDigits(ob1, ob2){


arr1= numberToArray(123455);
arr2 = numberToArray(554321);

obj1 = arryToObject(arr1);
obj2 = arryToObject(arr2);


    if(arr1.length != arr2.length){
        return false;
    }

    for (let val in obj1){

        if(obj1[val] !== obj2[val]){
            console.log("different number");
            return false;
        }
    }

    return true;



}
