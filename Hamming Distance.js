// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2
// You can assume that the two input strings are of equal length.

function hamming(a,b) {
  // declaring variable that holds the number of differences
	let mismatch = 0;
  
  // declaring for loop to iterate through the strings 
  for (let i = 0; i < a.length; i++){
    // comparing each string element
    if (a[i] !== b[i]){
      // increment mismatch variable if they are different
      mismatch++
    }
  }
  return mismatch;
}