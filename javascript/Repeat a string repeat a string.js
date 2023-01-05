
function repeatStringNumTimes(str, num) {
  var string = str;
  var count = 0;
  if(num<0)
    {
      return "";
    }
  else{
    
   for (i = 1;i<num;i++)
    {
     str += string;
    }
  }
  return str;
}

repeatStringNumTimes("abc", 3);
