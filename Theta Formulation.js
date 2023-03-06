// Write a function thetaFormula:

// When given two of the values and "?" returns the number value of the missing one.
// When given all three values returns a boolean value verifying if the statement is true or false.
// When given one or no values as arguments or invalid arguments returns null.
// For Example:

//     thetaFormula("?", 12, 35)        -->    0.343
//     thetaFormula(3, "?", 14)         -->    42
//     thetaFormula(5, 16, "?")         -->    3.2

//     thetaFormula(2, 5, 7)            -->    false
//     thetaFormula(2, 20, 10)          -->    true
//     thetaFormula( -1, 1, -1)         -->    true

//     thetaFormula(1, 2)               -->   null
//     thetaFormula(1)                  -->   null
//     thetaFormula()                   -->   null
//     thetaFormula("?", "?", 2)        -->   null
// If the returned value contains more than three numbers after the decimal it should be fixed to three decimal places. The function should be able to return negative values, they will be tested for.

function thetaFormula(radius, arc, angle) {
  
  // checking if all variable are defined
  if (radius === undefined || arc === undefined || angle === undefined){
    return null;
  }
  
  // checking if all variables are numbers
  else if (typeof(radius) === "number" && typeof(arc) === "number" && typeof(angle) === "number"){
    // checking if statement is true or false
    if (angle === arc / radius){
      return true;
    }
    else {
      return false;
    }
  }
  
  // checking if only radius is unknown
  else if (radius === "?" && arc !== "?" && angle !== "?"){
    // calculating radius
    radius = arc / angle;
    // returning radius rounded to 3 decimal points
    return Math.round(radius * 1000) / 1000;
  }
  
  // checking if only arc is unknown
  else if (radius !== "?" && arc === "?" && angle !== "?"){
    arc = radius * angle;
    return Math.round(arc * 1000) / 1000;
  }
  
  // checking if only angle is unknown
  else if (radius !== "?" && arc !== "?" && angle === "?"){
    angle = arc / radius;
    return Math.round(angle * 1000) / 1000;
  }
  
  return null;
}
