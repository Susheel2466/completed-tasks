// 2: Given an array of integers nums and an integer target, return the indices of the two
// numbers such that they add up to target. You may assume that each input would have exactly one
// solution, and you may not use the same element twice. You can return the answer in any order.
// For example, given:
// const nums = [2, 7, 11, 15];
// const target = 9;
// The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
// Requirements:
// Implement the solution in JavaScript.
// The solution should have a time complexity better than O(n^2).
// Include proper error handling for edge cases.


//solution

function twoSum(nums, target) {
  if (!Array.isArray(nums) || typeof target !== 'number') {
      throw new Error("Invalid input: nums must be an array and target must be a number.");
  }

  let map = new Map(); // Stores numbers and their indices

  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];

      if (map.has(complement)) {
          return [map.get(complement), i]; // Return indices of the two numbers
      }

      map.set(nums[i], i); // Store current number and its index
  }

  throw new Error("No valid two numbers found that sum up to the target.");
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
