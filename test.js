const expect = require ('chai').expect
const search = require('./search.js')


describe('Linear Search', () => {
  let arr1 = [1,2,3,5,6,7];
  
  it ('should return the index of the search term if found, else false', () => {
    expect(search.linear(5, arr1)).to.be.equal(arr1.indexOf(5));
    expect(search.linear(7, arr1)).to.be.equal(arr1.indexOf(7));
    expect(search.linear(10, arr1)).to.be.equal(arr1.indexOf(10));

  })
});

describe('Binary Search', () => {
  let arr1 = [1,2,3,5,6,7];
  let arr2 = [3,7,6,9,2,12,45,76,1];
  
  it ('should return the index of the search term if found, else false', () => {
    expect(search.binary(arr1,5)).to.be.equal(arr1.indexOf(5));
    expect(search.binary(arr1,1)).to.be.equal(arr1.indexOf(1));
    expect(search.binary(arr1,7)).to.be.equal(arr1.indexOf(7));
    expect(search.binary(arr1,10)).to.be.equal(arr1.indexOf(10));
    expect(search.binary(arr2,76)).to.be.equal(arr2.indexOf(76));
      
  })
})