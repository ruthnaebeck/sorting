describe('Split Array function', function() {
  it('is able to split an array of even number of elements into two halves', function() {
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]])
  });

  it('is able to split an array of odd number of elements into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]])
  });
});

describe('Merge Sort', function(){

  it('merges empty arrays', function(){
    expect( merge([],[]) ).toEqual( [] );
  });

  it('merges two arrays with one element', function(){
    expect( merge([4],[3]) ).toEqual( [3,4] );
  });

  it('merges two arrays with multiple values', function(){
    expect( merge([1,2,4],[3,5,6]) ).toEqual( [1,2,3,4,5,6] );
  });

  it('merges two arrays with multiple values', function(){
    expect( merge([1,2,4,7],[3,5,6]) ).toEqual( [1,2,3,4,5,6,7] );
  });

});


describe('mergeSort', function(){

  it('with 1 or fewer elements, returns sorted array', function(){
    expect( mergeSort([10000]) ).toEqual( [10000] );
  });

  it('does the thing it\'s supposed to do ', function(){
    expect( mergeSort([4,2,1,3,6,7,10,9,5]) ).toEqual( [1,2,3,4,5,6,7,9,10] );
  });

});
