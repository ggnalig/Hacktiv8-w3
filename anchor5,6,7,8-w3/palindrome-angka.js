function angkaPalindrome(num) {
  var condition = false; 
  var numString = '';
  var temp = 0;
  var hasil = 0;
  
  while(condition === false) {
    num++;
    numString = num.toString();
    numBalik = "";

    for(k = numString.length - 1; k >= 0; k--) {
      numBalik += numString[k];
    }

    temp = parseInt(numBalik);
    if(temp == num) {
      condition = true;
      hasil = num;
    }
  }
  return hasil;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

