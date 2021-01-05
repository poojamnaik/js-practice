function non_repeat_substring_without_map(str) {
    let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};
  
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      // if the map already contains the 'rightChar', shrink the window from the beginning so that
      // we have only one occurrence of 'rightChar'
      if (rightChar in charIndexMap) {
        // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
        // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
        windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      }
      // insert thex 'rightChar' into the map
      charIndexMap[rightChar] = windowEnd;
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }
  
  const non_repeat_substring_with_map = function(str) {
    const charMap = new Map();
    let maxLenth = 0;
    const arr = [...str];
    for(let startWindow = 0 , endWindow = 0; endWindow< arr.length; endWindow++){
      while(charMap.has(arr[endWindow])){
        charMap.delete(arr[startWindow])
        ++startWindow;
      }
      maxLenth = Math.max(endWindow- startWindow +1, maxLenth);
      charMap.set(arr[endWindow], 1);
    }
    return maxLenth;
  };
  
  
  console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
  console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
  console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);