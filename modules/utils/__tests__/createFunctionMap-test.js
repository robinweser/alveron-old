import createFunctionMap from '../createFunctionMap'

describe('Creating function maps', () => {
  it('should return an empty function map', () => {
    expect(createFunctionMap()).toEqual({})
  })
  it('should return a function map with an update key', () => {
    function update() {
      return true
    }

    expect(createFunctionMap(update)).toEqual({ update })
    expect(createFunctionMap(update).update()).toBe(true)
  })

  it('should return the input function map', () => {
    const functionMap = {
      update: () => true,
      action: () => false
    }
    expect(createFunctionMap(functionMap)).toBe(functionMap)
  })
})
