// Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

// For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

// To encrypt 'hello' you'd substitute as follows,

//               abcdefghijklmnopqrstuvwxyz
//   hello ==>   |||||||||||||||||||||||||| ==> bshhk
//               wednsaybcfghijklmopqrtuvxz
// hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.

function keywordCipher(string, keyword){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let trimmed_alphabet = alphabet
  let encoded_string = string.toLowerCase();
  
  // trimming keyword by removing repeat characters
  keyword = [... new Set(keyword.split(""))].join("");
  
  // trimming alphabet by removing trimmed keyword characters from alphabet
  for(let i = 0; i < keyword.length; i++){
    trimmed_alphabet = trimmed_alphabet.replace(keyword[i], "");
  }
  
  // setting key to trimmed keyword + trimmed alphabet
  let encryption_key = keyword.concat(trimmed_alphabet)
  
  // comparing alphabet characters to string characters
  for (let i = 0; i < alphabet.length; i++){
    for(let j = 0; j < string.length; j++){
      if (alphabet[i] == string.toLowerCase()[j]){
        // replacing string character with key character
        encoded_string = encoded_string.substring(0,j) + encryption_key[i] + encoded_string.substring(j+1)
      }
    }
  }
  return encoded_string;
}
