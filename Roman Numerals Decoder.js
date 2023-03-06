// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Solution
// function to convert individual roman numeral to arab numeral
const converter = (symbol) => {
    if (symbol === "I"){
        return 1;
    }
    if (symbol === "V"){
        return 5;
    }
    if (symbol === "X"){
        return 10;
    }
    if (symbol === "L"){
        return 50;
    }
    if (symbol === "C"){
        return 100;
    }
    if (symbol === "D"){
        return 500;
    }
    if (symbol === "M"){
        return 1000;
    }
    return 0;
}

const solution = (roman) => {
    // initializing variable that stores the final number
    let arab_numeral = 0
    
    for (let i = 0; i < roman.length; i++){
        // initializing s1 to a symbol
        let s1 = converter(roman.charAt(i));
        
        if (i + 1 < roman.length){
        // initializing s2 to the symbol that's to the right of s1
        let s2 = converter(roman.charAt(i + 1));
        
        // adding numerals if the former s1 is greater or equal to the latter s2
        if (s1 >= s2){
            arab_numeral += s1;
        }
        // substracting numerals if the former s1 is lesser than the latter s2
        else {
            arab_numeral += s2 - s1;      
            i++;
        }
    }
    else {
        arab_numeral += s1;
    }
    }
    return arab_numeral;
}