
function reverseString(str) {
  
  var strArray = str.split("");
strArray.reverse();
  
  return strArray.join("");
}

//alternate way to do it

function reverseString2(str){
  
    let reverseStr = "";
    
    for(var i = str.length-1; i>=0; i--){
      
      reverseStr= reverseStr + str[i];
      console.log(str[i]);
    }
    return reverseStr;
    
  }


reverseString("hello");
