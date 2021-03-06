// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    steps(n, row, (stair += "#"));
  } else {
    steps(n, row, (stair += " "));
  }
}

// function steps(n) {
//   var gato = "#";

//   for (var i = 1; i <= n; i++) {
//     var temp = gato.repeat(i);
//     temp += " ".repeat(n - i);
//     console.log(temp);
//   }
// }

module.exports = steps;
