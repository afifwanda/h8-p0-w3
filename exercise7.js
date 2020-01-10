function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var kalimatSplit = [];
    var kata = "";
    for(var i=0; i < kalimat.length; i++){
        kata += kalimat[i];
        if(kalimat[i] === " "|| i === kalimat.length-1){
            kalimatSplit.push(kata);
            kata = "";
        }
    }
    return kalimatSplit.length;
    }
    
  
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5