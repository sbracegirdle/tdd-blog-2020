import {expect} from 'chai'

import {range} from '../../src/rangeFirstRefactor'

describe('range()', () => {
  it('should return range of three for input of three', () => {
    expect(range(3)).to.deep.equal([0, 1, 2])
  })

  it('should return range of one for input of one', () => {
    expect(range(1)).to.deep.equal([0])
  })

  it('should return negative range of three', () => {
    expect(range(-3)).to.deep.equal([-0, -1, -2])
  })

  it('should return empty array for range of zero', () => {
    expect(range(0)).to.deep.equal([])
  })
})
