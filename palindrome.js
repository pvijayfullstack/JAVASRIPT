how to check if a string is a palindrome in JavaScript:

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

const word = "level";
const isPalindromeWord = isPalindrome(word);

console.log(`The word "${word}" is a palindrome: ${isPalindromeWord}`);
