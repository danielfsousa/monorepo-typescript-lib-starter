import { ms } from '../src/ms'

test('converts days to milliseconds', () => {
  const seconds = '2 days'

  const result = ms(seconds)

  expect(result).toBe(172800000)
})
