// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let big_str = s;
  for(let i = 1; i < n; i++){
    big_str = big_str.concat(s);
  }
  return big_str;
}
