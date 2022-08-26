function isPalindrome(word) {
  // Write your algorithm here
  var word = word.toLowerCase();
	var wordArray = word.split("");
	var reverseWord = wordArray.reverse().join("");
	return word === reverseWord ? true : false;
}

/* 
  Add your pseudocode here
  split the word into an array
  reverse the array
  join the array back into a string
  compare the two strings
*/

/*
  Add written explanation of your solution here
  - split the word into an array
  - reverse the array
  - join the array back into a string
  - compare the two strings
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
