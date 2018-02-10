/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/


function sumAll(arr) {
  var sum = 0;
  var big = 0;
  var small =0;
  
  if (arr[0]> arr[1]){
    big = arr[0];
    small = arr[1];
  }
  else{
    small = arr[0];
    big = arr[1];
  }

  for(var i = small; i<=big; i++){
    sum +=i;
  }
  return sum;
}

sumAll([1, 4]);
