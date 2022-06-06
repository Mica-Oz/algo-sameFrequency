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

function sameFrequencyAlternative(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
