// 1. Given an array of integers, return the length of the longest increasing subsequence.
// A subsequence is a sequence that can be derived from the array by deleting some or no elements
// without changing the order of the remaining elements. For example, given the array [10, 9, 2, 5, 3, 7,
// 101, 18], the longest increasing subsequence is [2, 3, 7, 101], and its length is 4.

// solution

function lengthOfLIS(nums) {
  if (!nums.length) return 0;

  let sub = [];

  for (let num of nums) {
      let left = 0, right = sub.length - 1;

      while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (sub[mid] < num) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }

      if (left < sub.length) {
          sub[left] = num;
      } else {
          sub.push(num);
      }
  }

  return sub;
}

console.log("longest increasing subsequence ", lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
console.log("longest increasing subsequence length", lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]).length); // Output: 4

