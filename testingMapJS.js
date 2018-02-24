// let myArray = [1,2,3,4,65,76, "u"];

// let myset = new Set(myArray);
// console.log(myArray.indexOf(4));

// var count = 0;

// myset.forEach(function(x){
// console.log(x);
// });


// var myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
// myMap.set('c3', 'Foo');


// myMap.forEach(function (x){

// console.log(x);
// });

var testArray = "abcabefr".split("");
var testMap = {};

// testArray.forEach(function (char){
//   if (testMap[char]){
//     testMap[char]++;
//   }
//   else{
//     testMap[char] = 1;
//   }

// });

testArray.forEach(function (char){
  if(testMap[char]){
    testMap[char]++;
  }
  else{
    testMap[char]  =1;
  }
});


console.log(testMap);
