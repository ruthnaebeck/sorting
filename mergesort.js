function split(wholeArray) {
  var firstHalf = [];
  var secondHalf= [];
  /* your code here to define the firstHalf and secondHalf arrays */
  var mid = Math.ceil(wholeArray.length/2)
  for (var i=0; i < wholeArray.length; i++) {
    if (i < mid) {
      firstHalf.push(wholeArray[i]);
    } else {
      secondHalf.push(wholeArray[i])
    }
  }
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  var newArr = [];
  var current1 = arr1[0];
  var current2 = arr2[0];
  var a1 = 0;
  var a2 = 0;

  for (var i = 0; i < arr1.length + arr2.length; i++) {
    if (current1 < current2) {
      if (current1) {
        newArr.push(current1)
      } else {
        newArr.push(current2)
      }
      a1++
      current1 = arr1[a1]
    } else {
      if (current2) {
        newArr.push(current2)
      } else {
        newArr.push(current1)
      }
      a2++
      current2 = arr2[a2]
    }
  }
  return newArr;
}

function mergeSort(array) {
  //split the array into two until you reach 1 (recurse)
  //base case for the recursion would be when array.length === 1
  //then run the merge function on both arrays
}
