import { add } from '../src/add'

test('adds two positive numbers', () => {
  const a = 3
  const b = 1

  const result = add(a, b)

  expect(result).toBe(4)
})

test('adds two negative numbers', () => {
  const a = -2
  const b = -3

  const result = add(a, b)

  expect(result).toBe(-5)
})
