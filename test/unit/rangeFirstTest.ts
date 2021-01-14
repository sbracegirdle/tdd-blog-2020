import {expect} from 'chai'

import {range} from '../../src/rangeFirstTest'

describe('range()', () => {
  it('should return range of three for input of three', () => {
    expect(range(3)).to.deep.equal([0, 1, 2])
  })
})
