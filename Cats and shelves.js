// Description
// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

function solution(start, finish) {
  // declaring jumps variable to hold number of jumps
  let jumps = 0
  
  // check if start and finish are different, there are no jumps otherwise
  if (start !== finish){
    // declaring difference between start and finish
    let difference = finish - start;
  
    // declaring remainder of difference when divided by 3
    let remainder = difference % 3;
    
    // declaring rounded down quotient of difference divided by 3
    let quotient = Math.floor(difference/3)
    
    // no remainder means that finish can be reached by jumps of 3 only
    if (remainder === 0){
      jumps = quotient
    }
    
    // 1 remainder means that an extra jump of 1 must be added
    else if (remainder === 1){
      jumps = quotient + 1
    }
    
    // 2 remainder means that 2 extra jumps of 1 must be added
    else if (remainder === 2) {
      jumps = quotient + 2
    }    
  }
  
  return jumps;
}