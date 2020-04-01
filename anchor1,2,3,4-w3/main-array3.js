var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) { 
    input.splice(1,2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4,2, 'Pria', 'SMA Internasional Metro');
    
    case3 = input[3].split('/');
    case3.sort((function(a, b){return b-a}));
    
    case2 = ''
    bulan = input[3].split('/');
    switch (true) {
        case (bulan[1] == 01):
        case2 += 'Januari';            
        break;
        case (bulan[1] == 02):
        case2 += 'Februari';
        break;
        case (bulan[1] == 03):
        case2 += 'Maret';            
        break;
        case (bulan[1] == 04):
        case2 += 'April';
        break;
        case (bulan[1] == 05):
        case2 += 'Mei';            
        break;
        case (bulan[1] == 06):
        case2 += 'Juni';
        break;
        case (bulan[1] == 07):
        case2 += 'Juli';            
        break;
        case (bulan[1] == 08):
        case2 += 'Agustus';
        break;
        case (bulan[1] == 09):
        case2 += 'September';            
        break;
        case (bulan[1] == 10):
        case2 += 'Oktober';
        break;
        case (bulan[1] == 11):
        case2 += 'November';            
        break;
        case (bulan[1] == 12):
        case2 += 'Desember';
        break;
        default:
        break;
    }
    case4 = input[3].split('/').join('-');
    case5 = input[1].slice(0,15);

    console.log(input);
    console.log(case2);
    console.log(case3);
    console.log(case4);
    console.log(case5);
} 

dataHandling2(input);

/**
* keluaran yang diharapkan (pada console)
*
* ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
* Mei
* ["1989", "21", "05"]
* 21-05-1989
* Roman Alamsyah
*/