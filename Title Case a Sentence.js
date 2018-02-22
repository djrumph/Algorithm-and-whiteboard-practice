
function titleCase(str) {
  
  //make all the letters lowercase
  str = str.toLowerCase();
  
  //split all the words into an array wtih each element containing only one word
  newStr = str.split(" ");
  
  //make an array to hold store the capitalized words in
 var  finalArray = [];
  
  
  /* go through each element in the newStr array, capitalize the first word, and store it
  inside an array*/
  for (var i = 0; i<newStr.length; i++)
    {
      //make word variavle containing element of array
      word = newStr[i];
      //store length of the word in a variable
      length = word.length;
      
     //make a substring of all the letters in the word except the first
      sub = word.substring(1, length);
 
      //capitalize the first letter of the word and add the substring
   word = word[0].toUpperCase() + word.substring(1, length);
      
     //add the capitalized word to the array.  
     finalArray[i] = word;
      
    }
  
  
 
  
  //return the array as a single string
  return finalArray.join(" ");
  
  
}

//alternate way using one variable
function firstWordCapitalize(str){

var sentenceArray = str.toLowerCase().split(' ');

for(var i = 0; i<sentenceArray.length; i++){


  sentenceArray[i] = sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].substring(1,sentenceArray[i].length);
}

return sentenceArray.join(" ");


}

//alternate way using map funtion and no new variables

function firstWordCapitalize(str){

return str
.toLowerCase()
.split(' ')
.map(function(word){

  return word[0].toUpperCase() + word.substring(1,word.length)
})

.join(" ");


}

console.log(firstWordCapitalize( "helLo my friEnd"));

console.log(firstWordCapitalize( "hello my friend"));

titleCase("I'm a little tea pot");
