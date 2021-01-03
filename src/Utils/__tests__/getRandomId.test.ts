import { getRandomId } from '../getRandomId'

describe('getRandomId test', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1)
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('Function should return _', () => {
    expect(getRandomId()).toBe('_')
  })
})
