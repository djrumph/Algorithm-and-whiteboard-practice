/*The Fibonacci sequence, it's a mathematical sequence where every number is 
the sum of the previous two numbers in the sequence: 										 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, etc.
*function paramater: 																											  0  1  2  3  4  5  6   7   8   9   10 

Calling a Fibonacci function on a negative number or 0 is undefined.
*/


console.log(fibonacci(20));

// 1. Write a recursive function that returns the nth Fibonacci number.
// 2. Store the generated list of N numbers and sort them by reverse lexical order.
function fibonacci(num, highNum = 1, lowNum = 0){
//this function runs in O(n) time
  
  if(lowNum == 0){
    //incrementing num by one to match up with fib sequence output
    num+=1;
    arr = [];
  }
  
  //add numbers to an array and turn each number to string
  arr.push(lowNum.toString());
  
  //if the number is 0 or lower, return undefined
  if(num ==1 && lowNum ==0){
    return 1;
  }
  if((num < 0 &&highNum <=1) || (num ==0 &&highNum <=1)){
    return undefined;
  }
  if(num== 0){
		//note time complexity of .sort() is O(n log (n)) greater than 10 items, otherwise it is O(n)
    //if I wrote the reverse function, first, I would loop over the array starting at index ( i = array.length)
    //then add each element as i decrements.this function would run in O(n)time.
    // I am assuming the built in javascript function runs similarly
    arraySortedInReverseLexicalOrder = arr.sort().reverse();
    console.log(arraySortedInReverseLexicalOrder);
    return lowNum;
  }
  
// recursive tail call with es6 js 
// first parameter decrements by 1. second parameter adds two numbers together to start the next sequence. third number keeps track of previous number in next sequence.
return fibonacci(num-1, highNum +lowNum, highNum);

} 



//3. Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?
console.log(isUnique('789543'));

//returns true if all characters in a string are unique, returns false otherwise
function isUnique(str){

  let arr = str.split("");
  //declaring an empty objecy to store characters
  let ob1 = {}

  for( let val of arr){
    //see if val exsists in ob1
    if(!ob1[val]){
      ob1[val] = 1;
    }
    else{
      return false
    }
  }
  return true;

}






//4. Implement an algorithm to find the kth to last element of a singly linked list.

//5.  Write a program to sort a stack such that the smallest items are on the top.  You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).  The stack supports the following operations: push, pop, peek and isEmpty.

//6. Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
