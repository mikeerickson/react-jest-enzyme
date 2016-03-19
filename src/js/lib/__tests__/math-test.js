
/*global jest*/
/*global describe*/
/*global it*/

jest.unmock('../math'); // unmock to use the actual implementation of sum

import math from '../math';

describe('math `jest` testing', () => {

  it('adds 1 + 2 to equal 3', () => {
    expect(math.add(1, 2)).toBe(3);
  });

  it('subtracts 4 - 2 to equal 2', () => {
    expect(math.subtract(4, 2)).toBe(2);
  })

  it('multiplies 6 and 6 to equal 36', () => {
    expect(math.multiply(6, 6)).toBe(36)
  })

  it('divides 10 and 5 to equal 2', () =>{
    expect(math.divide(10, 5)).toBe(2)
  })

  it('divides 1 and 4 to equal .5', () =>{
    expect(math.divide(2, 4)).toBe(.5)
  })


});