//var s = "stackoverflow";

const lengthOfLongestSubstring = str => {
  let result = [],
      maxResult = 0;
    let string = "";

  for (let i=0; i<str.length; i++) {
    if (!result.includes(str[i])) {
      result.push(str[i]);
    } else {
      maxResult = i;
    }
  }

  
  for(var i = 0; i<maxResult;i++){
    string += str.charAt(i);

  }

return string; 
  
  
};


console.log(lengthOfLongestSubstring("stackoverflow"))
