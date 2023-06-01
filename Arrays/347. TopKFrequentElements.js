/* THE PROBLEM
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.
*/

/* PSEUDOCODE
* create a condition that checks if arr is <= to 1
  if so, return array
* create an array to store frequent elements 

*/


// SOLUTION:
const frequentElements = (arr, k) => {
  if (arr.length <= 1) return arr;
  const count = {};
// variables to store the frequency of numbers
  const frequent = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    count[element] = (count[element] || 0) + 1;

    if (count[element] === k) {
      frequent.push(element);
    }
  }

  return frequent;
};

console.log(frequentElements([1, 1, 1, 2, 2, 3], 2));
console.log(frequentElements([1], 1));
