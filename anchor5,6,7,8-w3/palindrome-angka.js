function angkaPalindrome(num) {
  numString = num.toString();
  a = '';
  
  for (let i = numString.length-1; 0 <= i; i--) {
    a += numString[i];
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

