// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const square = [
      ["A", "B", "C", "D", "E"], 
      ["F", "G", "H", "(I/J)", "K"],
      ["L", "M", "N", "O", "p"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"]
    ]
    let result = ""
    if (encode == false) {
      for (let i = 0; i < input.length; i+=2) {
       let num1 = input[i]
        if (num1 == " ") {
        result += num1
          i--
        continue
      }
       let num2 = input[i + 1]
       if (!num2) {
         return false
       } 
       result += square[num2-1][num1-1]
      }
      return result.toLowerCase()
    }
    input = input.toUpperCase()
    for (let i = 0; i < input.length; i++) {  
      const letter = input[i]
      if (letter == " ") {
        result += letter
        continue
      }
      for (let j = 0; j < square.length; j++) {
        for (let k = 0; k < square[j].length; k++) {
          if (square[j][k].includes (letter)) {
           result += (k + 1)
            result += (j + 1)
          }
        }
      }   
    }
    return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
