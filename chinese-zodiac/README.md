# [Chinese Zodiac](https://www.codewars.com/kata/57a73e697cb1f31dd70000d2)

Long ago, in China, the Jade Emperor decided there should be a way of measuring
time. On his birthday he told the animals that there was to be a swimming race.
The first twelve animals across the fast flowing river would be the winners and
they would each have a year of the zodiac named after them.

The Chinese zodiac, known as Sheng Xiao or Shu Xiang, features 12 animal signs
in this order: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey,
Rooster, Dog and Pig. 2024 is the Year of the Dragon (Loong) according to
Chinese zodiac, starting from the 2024 Chinese New Year on Feb. 10 and lasting
to 2025 Lunar New Year's Eve on Jan. 28. 2025 is the Year of the Snake.

## Syntax

> chineseZodiac(`number`) -> `string`

### Parameters

**birthyear**: `number`

- Any birth year.

### Return Value: `string`

12 animal signs: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey,
Rooster, Dog and Pig

## Test Cases

Sample tests:

```js

describe('chineseZodiac', () => {
  it('should return the correct zodiac sign for the given birth year', () => {
    assert.strictEqual(chineseZodiac(2000), 'Dragon'); // Expected zodiac sign for the birth year 2000 is Dragon
    assert.strictEqual(chineseZodiac(2023), 'Rabbit'); // Expected zodiac sign for the birth year 2023 is Rabbit
    assert.strictEqual(chineseZodiac(1988), 'Dragon'); // Expected zodiac sign for the birth year 1988 is Dragon
  }
  });

// refactored to use describe/it/expect (what you will be learning at HYF)
describe('chineseZodiac', () => {
  it('should return the correct zodiac sign for the given birth year', () => {
    expect(chineseZodiac(2000)).toBe('Dragon'); // Expected zodiac sign for the birth year 2000 is Dragon
    expect(chineseZodiac(2023)).toBe('Rabbit'); // Expected zodiac sign for the birth year 2023 is Rabbit
    expect(chineseZodiac(1988)).toBe('Dragon'); // Expected zodiac sign for the birth year 1988 is Dragon
  }
  });
```

---

## Retrospective

What Went Well:

Efficiency: The code efficiently calculates the Chinese Zodiac animal using the
modulo operator, avoiding unnecessary loops or conditionals.

What Could Be Improved:

Scalability: While concise, the code may become less maintainable as the logic
becomes more complex or additional functionalities are introduced. Separating
concerns and modularizing the code could improve scalability.

### Continue Doing

- Experimentation: Keep experimenting with the code by making modifications,
  running it, and observing the outcomes. This hands-on approach helps reinforce
  your understanding and allows you to explore different scenarios and edge
  cases.

### Start Doing

- Read Actively: Engage in active reading of the code by carefully analyzing
  each line, understanding its purpose, and identifying patterns, techniques,
  and best practices used by the author.

- Analyze Code Structure: Pay attention to the overall structure and
  organization of the code. Identify how the code is modularized, how functions
  are defined and called, and how different components interact with each other.

- Study Comments and Documentation: Read and analyze comments and documentation
  within the code. Comments often provide valuable insights into the author's
  thought process, explanations of complex logic, or documentation for future
  reference.

### Stop Doing

- Stop Skimming Through: Avoid skimming through code without taking the time to
  analyze it thoroughly. Take a methodical approach by reading each line of
  code, understanding its role, and identifying any patterns or techniques used.

- Stop Ignoring Comments: Don't ignore comments within the code. Comments often
  provide valuable insights into the author's thought process, explanations of
  complex logic, or documentation for future reference.
