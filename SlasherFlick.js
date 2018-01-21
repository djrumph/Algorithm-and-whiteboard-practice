function slasher(arr, howMany) {
  // it doesn't always pay to be first

   arr.splice(0, howMany);
 var newArr = arr;
 return newArr;

 
}

slasher([1, 2, 3], 2);
