function targetTerdekat(arr) {
    // you can only write your code here!
    var positionO = arr.indexOf("o");
    var positionX = [];

    for(var i =0; i<arr.length; i++){
        if(arr[i] === "x"){
            positionX.push(Math.abs(i - positionO));
        }
    }
    
    if(positionX.length !== 0){
        positionX.sort();
        return positionX[0];
    }
    else{
        return 0;
    }

}
    

  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2