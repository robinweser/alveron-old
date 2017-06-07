/* @flow */
let count = 0

export default function generateAnonymousId(): string {
  return `__alveron_action_${++count}`
}
