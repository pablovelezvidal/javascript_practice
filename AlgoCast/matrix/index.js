// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//  [1, 2, 3, 4, 5]
// [16, 17, 18, 19, 6]
// [15, 24, 25, 20, 7]
// [14, 23, 22, 21, 8]
// [13, 12, 11, 10, 9]

function matrix(n) {
  let result = [];
  const total = n * n;
  const finalArray = [];

  for (let i = 1; i <= total; i++) {
    finalArray.push(i);
  }

  // fill the finalArray so the right indices can be found
  for (let i = 0; i < n; i++) {
    let temp = " ".repeat(n - 1).split(" ");
    result.push(temp);
  }

  let row = 0;
  let dir1 = "right";
  let dir2 = "down";
  // Keep the registry of the last elements added in each movement direction so the index of the next position can be found
  let lastAddedL2R = [];
  let lastAddedR2L = [];

  // loop over the total of items that will be added to the finalArray
  while (finalArray.length > 0) {
    let tempItem = finalArray.shift();
    // The write movement is from left to right
    if (countElements(result[row]) !== n && dir1 == "right" && dir2 == "down") {
      // in the first iteration, the index must be 0, then, the latest element added idex plus one
      let index =
        tempItem === 1 ? 0 : result[row].indexOf(lastAddedL2R[row]) + 1;
      lastAddedL2R[row] = tempItem; // save latest element added when moving from left to right
      result[row].splice(index, 1, tempItem);
      if (countElements(result[row]) === n) {
        // once full, the direction should go from right to left and move to the next row
        dir1 = "left";
        row++;
      }
      continue;
    } else if (
      countElements(result[row]) !== n &&
      dir1 == "left" &&
      dir2 == "down"
    ) {
      // the movement is in the right column from top to bottom
      // if there is no elements added, start in the last column, otherwise in the lastelement added index minus one
      let index = !lastAddedR2L[row]
        ? n - 1 - countElements(result[row])
        : result[row].indexOf(lastAddedR2L[row]) - 1;
      result[row].splice(index, 1, tempItem);
      lastAddedR2L[row] = tempItem; // save the latest element added in the direction right to left
      if (!result[row + 1] || countElements(result[row + 1]) === n) {
        // when there is no next row or the next row is full, the movement right to left in the row must start
        dir2 = "up";
      } else {
        // otherwise keep moving as a column and  go to the next row
        row++;
      }
      continue;
    }
    if (countElements(result[row]) !== n && dir1 == "left" && dir2 == "up") {
      // now the movement is in the bottom rows direction right to left
      let index = result[row].indexOf(lastAddedR2L[row]) - 1; // the index must be the latest element added in right to left direction minus one
      result[row].splice(index, 1, tempItem);
      lastAddedR2L[row] = tempItem; // add the latest element to right to left
      if (countElements(result[row]) === n) {
        // when the row is full, the movement bottom to top in the column must start
        dir1 = "right"; // now the direction is right
        row--; // and the column movement should start
      }
      continue;
    } else if (
      countElements(result[row]) !== n &&
      dir1 == "right" &&
      dir2 == "up"
    ) {
      // now the movement is in the column left up direction
      let index =
        countElements(result[row]) == 0
          ? 0
          : result[row].indexOf(lastAddedL2R[row]) + 1; // if there are no set values, starts in index 0 otherwise in the last item added plus one
      result[row].splice(index, 1, tempItem);
      lastAddedL2R[row] = tempItem;
      if (!result[row - 1] || countElements(result[row - 1]) === n) {
        // if there is  no above row or the above row is full, now the dir2 is down, which means write in the row in movement left to right
        dir2 = "down";
      } else {
        row--;
      }
      continue;
    }
  }

  return result;
}

// count the elements added to the array
function countElements(arr) {
  return arr.filter((el) => el !== "").length;
}

module.exports = matrix;
