const expect = require('chai').expect
const mergeSort = require('../mergeSort')


describe('mergeSort', function() {
  it ('exists', function() {
  	expect(mergeSort).to.be.ok;
  });

  it('handles an empty array', function(){
    expect( mergeSort([]) ).to.eql( [] );
  });

  it('handles an array with one element', function(){
    expect( mergeSort([2]) ).to.eql( [2] );
  });

    it('handles an array with two elements', function(){
    expect( mergeSort([2, 1]) ).to.eql( [1, 2] );
  });

  it('handles an array with multiple elements', function(){
    expect( mergeSort([2, 9, 4, 5]) ).to.eql( [2, 4, 5, 9] );
  });

  it('works with zero', function(){
  	expect( mergeSort([1, 4, 0]) ).to.eql( [0, 1, 4]);
  });

});