//write a program that checks if there is a three number pattern within an array

arr = [1,2,1,4,6,7,1,3,1,7,4,5,4];

arr2 = [];

pointer = 2;

for(let i = 0; i<= arr.length-2; i++){

    console.log("This is i: " + arr[i] + " This is pointer: " + arr[pointer]);

if(arr[pointer]== arr[i]){
   console.log("found pattern: " + arr[i] + arr[i+1] + arr[pointer]);
}

pointer +=1;

}
