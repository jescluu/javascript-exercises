const isPalindrome = function (str) {
    // Step 1: Normalize the string (remove spaces, punctuation, and make it lowercase)
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    // Step 2: Reverse the string
    const reversedStr = cleanedStr.split("").reverse().join("");
  
    // Step 3: Check if the original string is equal to the reversed string
    return cleanedStr === reversedStr;
  };
  

// Do not edit below this line
module.exports = palindromes;
