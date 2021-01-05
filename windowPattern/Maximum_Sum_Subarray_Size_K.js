// Given an array of positive numbers and a positive number ‘k,’ 
// find the maximum sum of any contiguous subarray of size ‘k’.
const max_sub_array_of_size_k = function(k, arr) {
    let maxSum = 0 ;
    let sum = 0;
    for (let windowStart = 0, windowEnd = 0; windowEnd<arr.length ;windowEnd++) {
      sum += arr[windowEnd];
      if(windowEnd >= k-1) {
        maxSum = (sum > maxSum) ? sum: maxSum ;
        sum -= arr[windowStart];
        windowStart++;
      }
    }
    return maxSum;
};
