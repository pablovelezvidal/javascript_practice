// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    let temp = array.slice(index, index + size);
    chunked.push(temp);
    index += size;
  }

  return chunked;

  //   const chunked = [];
  //   for (let el of array) {
  //     let last = chunked[chunked.length - 1];
  //     if (!last || last.length === size) {
  //       chunked.push([el]);
  //     } else {
  //       last.push(el);
  //     }
  //   }
  //   return chunked;

  //   let res = [];
  //   let temp = [];
  //   array.map((el, i) => {
  //     temp.push(el);
  //     if (temp.length == size || i == array.length - 1) {
  //       res.push(temp);
  //       temp = [];
  //     }
  //   });
  //   return res;
}

module.exports = chunk;
