//Write a function called sameFrequency. Given two positive integers,
//find out if the two numbers have the same frequency of digits.
//Time O(N)
//Sample Input

//sameFrequency(182, 281) // true
//sameFrequency(34, 14) // false
//sameFrequency(3589578, 5879385) // true
//sameFrequency(2, 222) // false

//frequency counter pattern

function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) {
    return false;
  }
  let hash = {};
  let numberString1 = num1.toString();
  let numberString2 = num2.toString();
  for (let i = 0; i < numberString1.length; i++) {
    let letter = numberString1[i];
    hash[letter] ? (hash[letter] += 1) : (hash[letter] = 1);
  }
  for (let i = 0; i < numberString2.length; i++) {
    let letter = numberString2[i];
    if (!hash[letter]) {
      return false;
    } else {
      hash[letter] -= 1;
    }
  }
  return true;
}
