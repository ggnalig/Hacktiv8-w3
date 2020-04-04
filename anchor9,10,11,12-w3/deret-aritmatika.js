function tentukanDeretAritmatika(arr) {
    b = 0;
    a = 0;
    for (let i = 0; i <= arr.length-2; i++) {
        b = (arr[i+1] - arr[i]);  
    } 
    for (let j = arr.length-1; 0 < j; j--) {
        a = (arr[j] - arr[j-1]);
    } 
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([1, 3, 5, 7]));


/* Un = a + (n – 1) b */