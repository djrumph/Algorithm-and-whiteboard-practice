arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

target = 18;
leftNum = arr[0];
rightNum = arr[arr.length-1];
divisor = arr.length/2;
pointer = arr[arr.length/divisor];
counter = 0;


console.log(pointer);

while (counter < arr.length-1){
    console.log("counter: " + counter );


if(pointer ==target){
    console.log (arr.indexOf(pointer));
    break;
}

if(divisor >1){
divisor = Math.floor(divisor/ 2);
}
console.log("divisor: " + divisor);
if(pointer > target ){

    if((pointer - target) !=1){
    leftNum = pointer;
    pointer -= arr[divisor];
    console.log("moving down");
    console.log("pointer is: "+ pointer);
       
    }
    else{
        pointer -= arr[divisor-1];
    console.log("pointer is: "+ pointer);
    }


}


//work on this one
if(pointer < target){

    if((pointer - target) !=1){
    rightNum = pointer;
    pointer += arr[divisor];
    console.log("moving up");
    console.log("pointer is: "+ pointer);   
    }
    else{
        pointer += arr[divisor +1];
        console.log("pointer is: "+ pointer);
    }


}

counter++;

}
