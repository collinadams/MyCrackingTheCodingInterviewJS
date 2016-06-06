/*
Problem: Implement a method to perform basic string compression using the counts of
repeated characters. For example, the string aabcccccaaa would become
a2blc5a3. If the "compressed" string would not become smaller than the original
string, your method should return the original string.
*/

function stringCompression(str) {
  var compressed = '';

  for(var i = 0; i < str.length; i++){
    var current = str[i];
    var count = 1;
    while(current === str[i + 1]){
      i++;
      count++;
    }
    compressed += current + parseInt(count);
  }
  return compressed.length >= str.length ? str : compressed;
}
