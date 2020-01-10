// buat fungsi baru untuk membalikan string
function reverse(word){
    var reverse = "";
    for(var i = word.length-1 ; i >= 0; i--){
        reverse += word[i];
    }
    return reverse;
}

function palindrome(kata) {
    // you can only write your code here!
    // lakukan iterasi untuk mengecek palindrome.
    for(var i = 0; i < kata.length; i++){
        // jika string kata = kata yang dibalik, return true
        if(kata === reverse(kata)){
            return true;
        }
        // jika tidak sama, return false.
        else {
            return false;
        }
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false