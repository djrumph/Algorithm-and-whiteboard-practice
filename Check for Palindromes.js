
//cleaner way to do it
function isPalin(str){

  str = str.toLowerCase().replace(/[\W]/g, "")
  reverseStr = str.split("").reverse().join("");

if (str === reverseStr){
  return true;
}
else{
  return false;
}


}


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

//side practice
function palindrome2(str) {
  
  str = str.toLowerCase();
  str = str.replace(/[\W_]+/g, ' ');
  str = str.replace(/ /g, "");
  
  var newStr = str.split("");
  newStr = newStr.reverse();
  newStr = newStr.join("");
  
  if(str ===newStr){
    return true;
  }
  else {
    
    return false;
  }
}




palindrome("1 eye for of 1 eye.");
