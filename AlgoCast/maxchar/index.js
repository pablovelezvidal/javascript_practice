// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let strArr = str.toString().split("");
  //   let res = [];
  let res = {};

  strArr.map((char) => {
    // if (!res[char]) {
    //   res[char] = 0;
    // }
    res[char] = res[char] + 1 || 1;
  });
  console.log(res);
  var maxChar = "";
  let maxVal = 0;
  //   for (const [key, value] of Object.entries(res)) {
  //     if (value > maxVal) {
  //       maxChar = key;
  //       maxVal = value;
  //     }
  //   }
  for (let char in res) {
    if (res[char] > maxVal) {
      maxVal = res[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
