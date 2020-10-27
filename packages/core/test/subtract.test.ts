import { subtract } from '../src/subtract'

test('substracts two positive numbers', () => {
  const a = 3
  const b = 1

  const result = subtract(a, b)

  expect(result).toBe(2)
})

test('substracts two negative numbers', () => {
  const a = -2
  const b = -3

  const result = subtract(a, b)

  expect(result).toBe(1)
})
