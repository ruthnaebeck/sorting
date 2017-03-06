
'use strict';

//long and convoluted way to split but it works
function split(arr) {
  var centerIndx;

  //determines center index depending on odd/even number in array
  if (arr.length % 2 === 0) {
    centerIndx = arr.length / 2;
  } else {
    centerIndx = Math.floor(arr.length / 2 + 1);
  }

  var leftArr = [],
      rightArr = [];

  for (var i=0; i < arr.length; i++) {
    if (i < centerIndx) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [leftArr, rightArr]
}

function merge(left, right) {
  var resultArr = [];

  //keeps track of index on both arrays
  var leftIndx = 0,
      rightIndx = 0;

  //while loop until one of the arrays run out of values to evaluate/compare
  while (leftIndx < left.length && rightIndx < right.length) {

    //whichever array has the smaller value gets pushed into resultArr
    if (left[leftIndx] <= right[rightIndx]) {
      resultArr.push(left[leftIndx])
      leftIndx++
    } else {
      resultArr.push(right[rightIndx])
      rightIndx++
    }
  }

  //this takes care of the 'leftover' values, will only use one of the for-loops depending on which array ran out of values first
  for (;leftIndx<left.length; leftIndx++) {
    resultArr.push(left[leftIndx]);
  }
  for (;rightIndx<right.length; rightIndx++) {
    resultArr.push(right[rightIndx]);
  }

  return resultArr;
}

function mergeSort(arr) {

  if (arr.length < 2) { // if the array length is one, return that array
    return arr;
  }

  //use split to split the current array (> arr.length of 2)
  var splitArrays = split(arr)
  var left = splitArrays[0];
  var right = splitArrays[1];

  //perform merge on the two array (but make sure the arrays are sorted first)
  return merge(mergeSort(left),mergeSort(right));
}























// function split(wholeArray) {
//   var firstHalf = [];
//   var secondHalf= [];
//   /* your code here to define the firstHalf and secondHalf arrays */
//   var mid = Math.ceil(wholeArray.length/2)
//   for (var i=0; i < wholeArray.length; i++) {
//     if (i < mid) {
//       firstHalf.push(wholeArray[i]);
//     } else {
//       secondHalf.push(wholeArray[i])
//     }
//   }
//   return [firstHalf, secondHalf];
// }

// function merge(arr1, arr2) {
//   var newArr = [];
//   var current1 = arr1[0];
//   var current2 = arr2[0];
//   var a1 = 0;
//   var a2 = 0;

//   for (var i = 0; i < arr1.length + arr2.length; i++) {
//     if (current1 < current2) {
//       if (current1) {
//         newArr.push(current1)
//       } else {
//         newArr.push(current2)
//       }
//       a1++
//       current1 = arr1[a1]
//     } else {
//       if (current2) {
//         newArr.push(current2)
//       } else {
//         newArr.push(current1)
//       }
//       a2++
//       current2 = arr2[a2]
//     }
//   }
//   return newArr;
// }

// function mergeSort(array) {
//   //split the array into two until you reach 1 (recurse)

//   if (array.length < 2) {
//     return array;
//   }

//   var splits = split(array),
//     left= splits[0],
//     right = splits[1];

//   return merge(mergeSort(left), mergeSort(right)); //merge sorted!

//   //base case for the recursion would be when array.length === 1
//   //then run the merge function on both arrays
// }
