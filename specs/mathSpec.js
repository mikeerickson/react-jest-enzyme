import math from '../src/js/lib/math';
import chai from 'chai'

let expect = chai.expect

describe('math `mocha` testing', () => {

  it('adds (1 + 2) to equal 3', () => {
    expect(math.add(1, 2)).to.equal(3);
  });

  it('subtracts (4 - 2) tro equal 2', () => {
    expect(math.subtract(4, 2)).to.equal(2);
  })

  it('multiplies (6 and 6) to equal 36', () => {
    expect(math.multiply(6, 6)).to.equal(36)
  })

  it('divides (10 by 5) to equal 2', () =>{
    expect(math.divide(10, 5)).to.equal(2)
  })

  it('divides (2 by 4) to equal .5', () =>{
    expect(math.divide(2, 4)).to.equal(.5)
  })


});