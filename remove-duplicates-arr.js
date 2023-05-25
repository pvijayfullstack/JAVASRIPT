//how to remove duplicates from an array in JavaScript:

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

const numbers = [1, 2, 3, 4, 3, 2, 1];
const uniqueNumbers = removeDuplicates(numbers);

console.log(`Array with duplicates: ${numbers}`);
console.log(`Array without duplicates: ${uniqueNumbers}`);
