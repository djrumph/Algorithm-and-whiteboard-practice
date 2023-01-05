function factorial(num){

//iterative solution
//     let total; 
//     for(let i = num-1; i>0; i--){
//         console.log(num);
//       num = num*i;

//     }
   
//    return num;

// recursive solution
    if (num ===1){
        return num;
    }
    return num * factorial(num-1);
}

factorial(7);
