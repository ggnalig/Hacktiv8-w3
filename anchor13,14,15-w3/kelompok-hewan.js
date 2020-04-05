function groupAnimals(animals) {
    var kamus ='abcdefghijklmnopqrstuvwxyz';
    arrHasil = [];
    arrTemp = [];
    
  for(var i = 0; i < kamus.length; i++) {
    var abjad = kamus[i];
    for(j = 0; j < animals.length; j++) {
      if(abjad === animals[j][0]) {
        arrTemp.push(animals[j]);
      }
    }
    if(arrTemp.length != 0) {
      arrHasil.push(arrTemp);
      arrTemp = [];
    }
  }
  return arrHasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]