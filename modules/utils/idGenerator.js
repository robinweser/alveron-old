/* @flow */
export default function idGenerator() {
  let count = 0

  return function generateAnonymousId(): string {
    return `__alveron_action_${count++}`
  }
}
