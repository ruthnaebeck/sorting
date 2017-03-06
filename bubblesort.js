'use strict';

function bubbleSort(arr) {
  var sorted = false;
  for (var end = arr.length; end > 0 && !sorted ; end--) {
    sorted = true;
    for (var j = 0; j < end; j++) {
      if (!inOrder(arr,j)) {
        swap(arr,j)
        sorted = false;
      }
    }
  }
  return arr;
}

function inOrder(arr,idx) {
  if (idx === arr.length - 1) { //if index is at the end of the array, just return true;
    return true;
  }
  return arr[idx] < arr[idx+1]
}

function swap(inputArr, indx) {
  var larger = inputArr[indx];
  inputArr[indx] = inputArr[indx + 1]
  inputArr[indx+1] = larger;
}
































// function bubbleSort(arr) {
//   var largest = arr[0];

//   //base = descending loop reaches zero
//   for(var i = 0; i < arr.length; i++){
//     //the # of steps needed
//     for(var j = 1; j < arr.length; j++){
//       //this will do compare and swap
//       var current = arr[j];
//       if(largest < current){
//         //store
//         largest = current;
//       }else{
//         swap();
//       }
//     }
//     largest = arr[0];
//   }

//   function swap() {
//     arr[j] = largest;
//     arr[j - 1] = current;
//   }

//   return arr;
// }

// // use strict;

// // function bubbleSort(array) {
// //   var sorted = false;

// //   // by doing below, we saved a lot of unnecessary looping
// //   for (var end = array.length - 1; end > 0 && !sorted; end--) { //passes
// //     sorted = true;
// //     for (var j=0; j < end; j++) { //bubbling
// //         if (!inOrder(array, j)) { //if these elements are NOT in order...
// //           swap(array, j);
// //           sorted = false;
// //         }
// //       }
// //     }
// //   return array;
// // }

// // function inOrder(array, index) { //pure function
// //   if (index === array.length - 1) {
// //     return true;
// //   }
// //   return array[index] < array[index + 1];
// // }

// // function swap(array, index) {
// //   var oldLeftValue = array[index];
// //   array[index] === array[index+1];
// //   array[index+1] = oldLeftValue;
// // }
