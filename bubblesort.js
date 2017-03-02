function bubbleSort(arr) {
  var largest = arr[0];

  //base = descending loop reaches zero
  for(var i = 0; i < arr.length; i++){
    //the # of steps needed
    for(var j = 1; j < arr.length; j++){
      //this will do compare and swap
      var current = arr[j];
      if(largest < current){
        //store
        largest = current;
      }else{
        swap();
      }
    }
    largest = arr[0];
  }

  function swap() {
    arr[j] = largest;
    arr[j - 1] = current;
  }

  return arr;
}
