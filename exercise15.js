function groupAnimals(animals) {
    // you can only write your code here!
    var newAnimal = [];
    var index = 0;

    animals.sort();
    for(var i = 0; i< animals.length; i++){
        if(newAnimal.length === 0){
            newAnimal.push([animals[i]]);
        }
        else if(newAnimal[index][0][0] === animals[i][0]){
            newAnimal[index].push(animals[i]);
        }
        else{
            newAnimal.push([animals[i]]);
            index++
        }
    }
    return newAnimal;

  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]