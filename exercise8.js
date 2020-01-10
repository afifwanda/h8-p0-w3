function pasanganTerbesar(num) {
    // you can only write your code here!
    var num = String(num)
    var pasangan = [];
    var angka = "";
    for(var i=0; i<num.length;i++){
        angka += num[i]+ num[i+1];
        if(num.length > 0){
            pasangan.push(Number(angka));
            var angka = "";
        }
    }
    pasangan.pop();
    pasangan.sort();
    return pasangan[pasangan.length-1];
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99