//find two numbers in an array that equal 0 in O(n) time

arr = [-4,-3,-2,-1,0,1,2,3,10];


left = 0;

r = arr.length-1;

while(left <r){

console.log(arr[r]);
console.log(arr[left]);

sum = arr[r] + arr[left];

if(sum ===0){
    console.log("sum found: " + arr[r] + arr[left] + " = " + sum)
    break;
}
else if(sum >0){
    r--;
}
else{
    left++;
}


}



















//  left = 0;


//  ight = arr.length - 1;

// while(left <ight){

//     console.log("right num: "+arr[ight]);
//     console.log("left num: " +arr[left]);

//     let sum = arr[left] + arr[ight];
//     console.log("sum: " + sum);
//     if(sum ===0){
//        console.log( [arr[left] + arr[ight]]);
//        break;
//     }
//     else if (sum >0){
//         ight--;
//     }
//     else{
//         left++;
//     }


// }
