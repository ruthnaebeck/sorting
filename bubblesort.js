function bubbleSort(arr) {
  var largest = arr[0];
  var counter = arr.length;

  function swap() {
    arr[j] = largest;
    arr[j - 1] = current;
  }

  //base = descending loop reaches zero
  for(var i = 0; i < arr.length; i++){
    //the # of steps needed
    for(var j = 1; j < counter; j++){
      //this will do compare and swap
      console.log("current arr:", arr);
      console.log("arr[j]:", arr[j]);
      console.log("largest:", largest)
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
  return arr;
}
