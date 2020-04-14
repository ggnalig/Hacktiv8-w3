function hitungJumlahKata(kalimat) {
    var arrayKata = [];
    var temp = ''; 
    
    for (let i = 0; i < kalimat.length; i++) { 
        if (kalimat[i] !== ' ') {
            temp += kalimat[i];
        }
        if (kalimat[i] == ' ' || i == kalimat.length-1) {
            arrayKata.push(temp);
            temp = '';
        }
    }
    return arrayKata.length;
}


// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
/* console.log(hitungJumlahKata('Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application')); */