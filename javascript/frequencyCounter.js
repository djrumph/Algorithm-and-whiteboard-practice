//given two numbers, determine if the digits of the numbers have the same frequency. 



function sameFrequency(num1, num2){
    
//first solution
//     num1 = num1.toString().split("").sort();
//     num2 = num2.toString().split("").sort();

//     if (num1.length != num2.length){
//         return false;
//     }

//     for(let i = 0; i < num1.length; i++){
//         if(num1[i] !== num2[i]){
//             return false;
//         }

//     }
//     return true;


//second solution
    num1 = num1.toString();
    num2 = num2.toString();

    
    let obj1 = {}
    let obj2 = {}

    for(val of num1){
        obj1[val] = (obj1[val] || 0) +1
    }

    for(val of num2){
        obj2[val] = (obj2[val] || 0) +1
    }

    console.log(obj1,obj2)

    for(val in obj1){
        if(!(val in obj2)){
            return false;
        }
        else if(obj1[val] !== obj2[val]){
            return false;
        }
    }

    return true;

}

sameFrequency(22,222)
