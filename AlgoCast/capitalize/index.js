// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // if first character is not a letter, include it and capitalize second character
  let result = str[0].match(/[a-zA-Z]/g)
    ? str[0].toUpperCase()
    : str[0] + str[1].toUpperCase();

  const resultLength = result.length;

  for (let i = resultLength; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

module.exports = capitalize;
