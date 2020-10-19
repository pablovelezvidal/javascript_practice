// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, gatoRepeat = 1) {
  if (n === row) {
    return;
  }
  var gato = "#";
  var whiteSpace = " ";

  var blankSpacesRepeat = n - row - 1;
  var gatoRepeat = row == 0 ? 1 : gatoRepeat + 2;

  var line = whiteSpace.repeat(blankSpacesRepeat);
  line += gato.repeat(gatoRepeat);
  line += whiteSpace.repeat(blankSpacesRepeat);
  console.log(line);
  pyramid(n, row + 1, gatoRepeat);
}

// function pyramid(n) {
//   var gato = "#";
//   var whiteSpace = " ";

//   for (var i = 1; i <= n; i++) {
//     var blankSpacesRepeat = n - i;
//     var gatoRepeat = i == 1 ? 1 : gatoRepeat + 2;
//     var temp = whiteSpace.repeat(blankSpacesRepeat);
//     temp += gato.repeat(gatoRepeat);
//     temp += whiteSpace.repeat(blankSpacesRepeat);
//     console.log(temp);
//   }
// }

module.exports = pyramid;
