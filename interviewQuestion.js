str = "aglkgjatjerob";

var startPosition = 0;
var strLongest ="";
var high = 0;
var current = 0;
var newMap = new Set();


for(var i = 0; i<str.length; i++){
  var c = str.charAt(i);


  while(newMap.has(c)){
    newMap.delete(str.charAt[startPosition]);
    startPosition++;
  }
  newMap.add(c);

  if(high <i - startPosition +1){
    max = i - startPosition +1;
    strLongest = str.substr(startPosition, i+1);
  }

}

console.log(longest);
