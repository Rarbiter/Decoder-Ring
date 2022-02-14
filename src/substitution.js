// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let result = ""
    if (!alphabet || alphabet.length != 26) {
      return false
    }
    input = input.toLowerCase()
    const check = {}
    for (let i = 0; i < alphabet.length; i++) {
      let letter = alphabet[i]
      if (check[letter]) {
          return false
          }
      check[letter] = true
    }
    for (let i = 0; i < input.length; i++) {
      if (input[i]== " ") {
        result += input[i]
      }
      else {
        if (encode == true) {
         let letter = input.charCodeAt(i) -97
      result += alphabet[letter] 
        }
        else {
          let letter = alphabet.split("").findIndex(a => a== input[i]) 
            result += String.fromCharCode (letter + 97)                                    
        }
      }
    }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
