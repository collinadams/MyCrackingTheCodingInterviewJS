/*
Problem: Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, si and s2, write code to check Ifs2 is a rotation of si
using only onecalltoisSubstring (e.g., "waterbottLe" is a rotation of "erbottLewat").
*/

function isRotation(str1, str2) { //determines whether str2 is a rotation of str1
  //strings must be of equal length and str1 should not be empty
  if(str1.length !== str2.length || str1.length === ''){
    return false;
  }
  var str1Twice = str1 + str1;

  return isSubstring(str1Twice, str2); 
}

function isSubstring(source, target){
  return source.indexOf(target) > -1;
}