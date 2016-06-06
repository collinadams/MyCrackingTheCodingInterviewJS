function areAnagrams(str1,str2) {
  if(str1.length !== str2.length){
    return false;
  }
  var str1Arr = str1.split('').sort();
  var str2Arr = str2.split('').sort();

  str1Arr.forEach(function(val, ind){
    if(val !== str2Arr[ind]){
      return false;
    }
  });
  return true;
}
