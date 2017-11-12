
function palindrome(str) {
  // Good luck!
  
 var newStr= str.toLowerCase();
  
//removes numbers
  
//removes most characters but not '_' apparently....
 newStr = newStr.replace(/[^\w\s]/gi, '');
  
// removes the pesky '_' character
  newStr= newStr.replace(/_/g, '');
  
 //removes white space
 newStr = newStr.replace(/ /g,'');
  
  
//saves the modified string
var forwardString = newStr;
  
  
// saves a reversed string.       
var backwardString = newStr.split("");
backwardString = backwardString.reverse();
backwardString = backwardString.join("");
  
  if (forwardString == backwardString)
    
    {
      return true;
    }
  else{
    return false;
  }
  
  
  return backwardString;
  
  
  
  
}



palindrome("1 eye for of 1 eye.");
