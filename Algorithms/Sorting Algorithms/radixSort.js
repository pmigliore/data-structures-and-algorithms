// BIG O: O(nk)

// Use Case

// When the repetition of elements is not much in the given lists, but the length of the elements is of the same range,
// then using radix sort is beneficial.
// Radix sort is widely used on data that can be sorted lexicographically.
// It is also applied to stably sort strings.

// Directions:
// - Define a function that accepts list of numbers
// - Figure out how many digits the largest number has
// - Loop from k = 0 up to this largest number of digits
// - For each iteration of the loop:
//   - Create buckets for each digit (0 to 9)
//   - place each number in the corresponding bucket
//     based on its kth digit
// - Replace our existing array with values in our buckets
//   starting with 0 and going up to 9
// - Return list at the end

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
