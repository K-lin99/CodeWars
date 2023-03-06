// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0
// Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

function elevatorDistance(array) {
  // declaring variable that holds the traveled distance in floors
  let distance = 0
  
  // declaring for loop to iterate through the floor destinations
  for (let i = 0; i < array.length; i++){
    
    // checking if last floor is reached and exiting loop if true
    if (i === array.length - 1){
      break;
    }
    
    // checking if consecutive floors are the same and adding 0 if true
    else if (array[i] === array[i+1]){
      distance += 0;
    }
    
    else {
      // adding the positive difference of consecutive floors to distance variable
      distance += Math.abs((array[i] - array[i + 1]))
    }
  }
  return distance;
}