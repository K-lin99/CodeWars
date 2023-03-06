// The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

// example:

// let see n=42

// Multiple         value         digits     comment
// 42*1              42            2,4 
// 42*2              84             8         4 existed
// 42*3              126           1,6        2 existed
// 42*4              168            -         all existed
// 42*5              210            0         2,1 existed
// 42*6              252            5         2 existed
// 42*7              294            9         2,4 existed
// 42*8              336            3         6 existed 
// 42*9              378            7         3,8 existed
// Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9.

function computeDepth (x){
    // initializing intiger and array variables
    let depth = 0; 
    let value = 0;
    let numbers = 0;
    let arr = [];
    
    for (let i = 1; i < 100; i++){
      // storing the value of the multiplication
      value = x * i;
      // stringifying value and spliting each digit 
      numbers = value.toString().split("");
      // pushing the digits to the array
      arr.push(numbers)
      // flatening the array
      arr = [].concat.apply([], arr);
      // incrementing the depth variable
      depth++
      // checking if all the digits are present in the array
      if (arr.includes("0") && arr.includes("1") && arr.includes("2") && arr.includes("3") && arr.includes("4") && arr.includes("5") && arr.includes("6") && arr.includes("7") && arr.includes("8") && arr.includes("9")){
        break;
      }
    }
    return depth;
  }