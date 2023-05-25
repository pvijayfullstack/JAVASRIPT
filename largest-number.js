//how to find the largest number in an array using a loop in JavaScript:

function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const numbers = [10, 5, 8, 16, 3, 20];
const largestNumber = findLargestNumber(numbers);

console.log(`The largest number in the array is: ${largestNumber}`);
