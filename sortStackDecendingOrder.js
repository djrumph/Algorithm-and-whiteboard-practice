/*Write a program to sort a stack such that the smallest items are on the top.  
You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).  
The stack supports the following operations: push, pop, peek and isEmpty.*/
//there are two stacks, lowStack and highStack. there is one temp variable. 

lowStack = [33,54,32,70,56,1,403];
highStack =[];

decending(lowStack);

function decending(lowStack){

  count = 0;
  sorted = false;
  while(!sorted){
    if(count % 2 == 0){
      lowToHigh();
      if(check(lowStack) == true){
        sorted = true;
      }
    }
    else{
      highToLow();
      if(check(lowStack) == true){
        sorted = true;
      }
    }
    count++
    if(count ==50){
      break;
    }
  }



//check()
//loop through stack and see if it is in decending order

function check(stack){

    for(let i = 0; i<stack.length; i++){
        if(stack[i.length]>stack[i.length-1]){
        }
       
          return true;
        
   }

   




}


function lowToHigh(){
    temp = lowStack.pop();

    //loop through the first stack
    //continue until the stack is empty
    while(lowStack.length > 0){
        //if the lowStack.pop() is bigger than temp, push the lowStack.pop() to the highStack
        if((lowStack[lowStack.length-1])> temp){
        highStack.push(lowStack.pop());
        }

        //if lowStack.pop() is smaller, push the temp value to the highStack, assign lowStack.pop() to temp
        if((lowStack[lowStack.length-1])< temp){
            highStack.push(temp);
            temp = lowStack.pop();
        }
    }

    highStack.push(temp);
}



function highToLow(){
    //temp equals lowStack2.pop();
    temp = highStack.pop();
 
    //loop through the highStack, check to see if highStack.pop() value is less than the temp value
    //continue until stack is empty
    while(highStack.length > 0){

        //if the highStack.pop() is lower, push highStack.pop() to the lowStack, 
        if(highStack[highStack.length -1] < temp){
            lowStack.push(highStack.pop());
        }
        //if the highStack.pop() is higher, push temp value to the lowStack, temp equals highStack.pop()

        if(highStack[highStack.length -1] > temp){
            lowStack.push(temp);
            temp = highStack.pop();
        }
    }
    lowStack.push(temp);
}

function reverse(stack){
  reversedStack = [];

  while(stack.length > 0){
  
    reversedStack.push(stack.pop());

  }

  return reversedStack;
}

    return reverse(lowStack);
}

    
