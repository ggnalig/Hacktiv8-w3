function pasanganTerbesar(num) {
    hasil = 0;
    temp = num.toString();
    
    for (let i = 0; i < temp.length - 1; i++) {
        if (i === 0){ 
            hasil = temp[i] + temp[i+1];
        }
        if (hasil < parseInt(temp[i] + temp[i+1])){
            hasil = parseInt(temp[i] + temp[i+1]);
        } 
    }
    return parseInt(hasil);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99