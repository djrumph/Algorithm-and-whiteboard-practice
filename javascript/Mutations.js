/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/

console.log(mutation(["hello", "hye"]));

function mutation(arr) {
  
  
    
    secondWord = arr[1].toLowerCase();
    firstWord = arr[0].toLowerCase();
    
    for(var i =0; i<secondWord.length;i++){
      
        
     if(firstWord.indexOf(secondWord[i]) === -1){
          return false;
        }
    }

      return true;
      
    
}
