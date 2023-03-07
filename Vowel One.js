// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
  s = s.toLowerCase();
  
  for (let i = 0; i < s.length; i++){
    if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u"){
      s = s.substring(0,i) + "1" + s.substring(i+1)
    }
    else {
      s = s.substring(0,i) + "0" + s.substring(i+1)
    }
  }
  return s;
}