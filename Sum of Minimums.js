// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

function sumOfMinimums(arr) {
    // initializing variable that stores the sum
    let sum = 0;
    
    // iterating through each array row
    const arrOfMinimums = arr.map((row) => {
      // initializing and storing the minimum value in the row
        let min = Math.min(...row)
        // adding the  minimum value to the sum variable
        sum += min;
    })
    // returning the final sum
    return sum;
}