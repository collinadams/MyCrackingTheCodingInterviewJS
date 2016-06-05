//O(n^2)
function hasUniqueChars(str) {
  for(var i = 0; i < str.length; i++){
    if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
      return false;
    }
  }
  return true;
}

//O(n)
function hasUniqueCharsOptimized(str){
  var freqObj = {};
  for(var i = 0; i < str.length; i++){
    if(freqObj.hasOwnProperty(str[i])){
      return false;
    }
    freqObj[str[i]] = true;
  }
  return true;
}