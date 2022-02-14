// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  

  function caesar(input, shift, encode = true) {
    if (shift == 0 || shift > 25 || shift < -25 || !shift)
      return false
 let result = "";
    if (encode == false) { 
      shift = shift * -1
    }
    input = input.toLowerCase()
    for (let i = 0; i < input.length; i++) {
      const letter = input.charCodeAt(i)
      if (letter < 97 || letter > 122) {
        result += input[i]
        continue 
      }
      let number = letter + shift
      if (number < 97) {
        number += 26 
      }
      if (number > 122) {
        number -= 26
      }
      result += String.fromCharCode(number)
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
