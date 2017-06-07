import createActionType from '../createActionType'

describe('Creating action types', () => {
  it('should join scope and name with a colon', () => {
    expect(createActionType('scope', 'name')).toEqual('scope:name')
  })
})
