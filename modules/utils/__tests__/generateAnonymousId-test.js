import idGenerator from '../idGenerator'

describe('Generating anonymous ids', () => {
  it('should return a unique anonymous id', () => {
    const generateAnonymousId = idGenerator()

    expect(generateAnonymousId()).toEqual('__alveron_action_0')
    expect(generateAnonymousId()).toEqual('__alveron_action_1')
  })
})
