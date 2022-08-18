// BIG O: O(n^2)

// Use Case

// When the list is small. As the time complexity of selection sort is O(N^s2) which makes it inefficient for a large list.
// When memory space is limited because it makes the minimum possible number of swaps during sorting.

// Objective:
// A sorting algorithms similar to bubble sort,
// but instead of first placing large values into sorted position,
// it places small values into sorted position

// Directions:
// - Store the first element as the smallest value you've seen so far.
// - Compare this item to the next item in the array until you find a
//   smaller number.
// - If a smaller number is found, designate that smaller number to be
//   the new "minimum" and continue until the end of the array.
// - If the "minimum" is not the value (index) you initially began with,
//   swap the two values.
// - Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

selectionSort([0, 2, 34, 22, 10]);
