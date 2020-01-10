function reverse(nums){
    var reverse = "";
    for(var i = String(nums).length-1; i >= 0; i--){
        reverse += String(nums)[i];
    }
    return reverse;
}

function angkaPalindrome(num) {
    // you can only write your code here!
    var palindrome = 0;
        if(String(num).length < 2){
            palindrome += num + 1;
        }
        else{
            while(String(num) !== reverse(num)){
                num++;
                if(String(num) === reverse(num)){
                    palindrome += num;
                }
            }
        }
        return palindrome;
    }
   

  
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001