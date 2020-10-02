// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// function anagrams(stringA, stringB) {
//   let cleanResA = getWorkArray(stringA);
//   let cleanResB = getWorkArray(stringB);

//   if (Object.keys(cleanResA).length !== Object.keys(cleanResB).length) {
//     return false;
//   }

//   for (let char in cleanResA) {
//     if (!cleanResB[char] || cleanResB[char] !== cleanResA[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function getWorkArray(string) {
//   let resArr = {};
//   string = string.match(/[a-zA-Z0-9]/g);
//   string.map((char) => {
//     resArr[char] = resArr[char] + 1 || 1;
//   });
//   return resArr;
// }

module.exports = anagrams;
