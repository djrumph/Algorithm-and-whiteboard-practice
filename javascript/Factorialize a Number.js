function factorialize(num) {
  
  var result = 1;
  
  for (var i = num; i>=1; i--)
    {
      result = i*result;
      
    }
  
  
  return result;
  
  
  
}

factorialize(5);
