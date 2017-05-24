/* @flow */
let count = 0

export default function generateAnonymousId(): string {
  return `__alveron${++count}`
}
