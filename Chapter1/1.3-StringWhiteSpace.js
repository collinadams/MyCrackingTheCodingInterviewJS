/*
Problem: Write a method to replace all spaces in a string with '%20'.
*/
/*
This could be done fairly simply by using the String.replace() function. 
I elected to not do that for the sake of making this problem a little less trivial
*/

function replaceWhiteSpace(str) {
  var fixedStr = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] === ' '){
      fixedStr += '%20';
    }else{
      fixedStr += str[i];
    }
  }
  return fixedStr;
}

function replaceWhiteSpaceRgx(str){
  return str.replace(/\s/g, '%20');
}
