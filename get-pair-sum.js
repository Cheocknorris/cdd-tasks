
// Write a function to find two numbers that produce a given sum in an array.
// Example: [5, 3, 6, 7, 3, 1, 2, 4] - sum 11, return [7, 4]

function getPairSum(nums, sum) {
    let seen = new Map;

    for (let i = 0; i < nums.length; i++) {
      let need = sum - nums[i];
      if (seen[need]) {
        return [need, nums[i]];
      } else {
        seen[nums[i]] = 1;
      }
    }
    return null;
  }


console.log(getPairSum([7,1,3,4], 11));