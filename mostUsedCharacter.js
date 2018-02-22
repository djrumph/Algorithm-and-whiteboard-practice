//find the character that occures most in a string and return that character and the number of occurences. 

function mostUsedLetter(str){
  str = str.toLowerCase().replace(/ " "/g, " ").split('').sort().join("");
  var mostChar = "a";
  var bigCount = 0;
  var currentCount = 1;

  for(var i = 0; i<str.length; i++){
    if(str.charAt(i) === str.charAt(i+1)){
      currentCount++;
      if(currentCount> bigCount){
        bigCount = currentCount;
        mostChar = str.charAt(i);
      }
    }
    else{
      currentCount = 1;
    }
  }
  
  return mostChar + " " + bigCount
}

console.log(mostUsedLetter( "heeeeeelLlo my friEnd"));
