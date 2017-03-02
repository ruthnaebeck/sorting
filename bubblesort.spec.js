describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of 1', function(){
    expect( bubbleSort([4]) ).toEqual( [4] );
  });

  it('handles array with multiple values', function(){
    expect( bubbleSort([4,6,1,3,7,8]) ).toEqual( [1,3,4,6,7,8] );
  });

  // it ('calls swap function', function () {
  //   spyOn(window, 'swap').and.callThrough();
  //   bubbleSort([4,6,1,3,7,8]);
  //   expect(swap.calls.count()).toEqual(3);
  // });

});





