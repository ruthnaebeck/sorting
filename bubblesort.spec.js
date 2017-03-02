describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array of 1', function(){
    expect( bubbleSort([4]) ).toEqual( [4] );
  });
});

describe('Bubble Sort', function(){

  beforeEach (function () {
    spyOn(swap).and.callThrough();
  });

  it('check how many times swap is called', function () {
    expect(swap.calls.count()).toEqual(3);
  });

  it('handles array with multiple values', function(){
    expect( bubbleSort([4,6,1,3,7,8]) ).toEqual( [1,3,4,6,7,8] );
  });
});

it ('calls swap function', function () {
  spyOn(bubbleSort, 'swap').and.callThrough();
  bubbleSort([4,6,1,3,7,8]);
  expect(bubbleSort.swap.calls.count()).toEqual(3);
});
