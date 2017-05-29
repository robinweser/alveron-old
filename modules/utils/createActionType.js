/* @flow */
export default function createActionType(scope: string, name: string): string {
  return `${scope}:${name}`
}
