function palindrome(kata) {
    var newKata = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        newKata += kata[i];
    }
    if (newKata == kata) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('malam'));
console.log(palindrome('ayam'));
console.log(palindrome('racecar'));