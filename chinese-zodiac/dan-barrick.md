# [Dan Barrick](https://edabit.com/challenge/8xAvdyphm83tzKCKt)

```js
const chineseZodiac = (y) =>
  [
    'Monkey',
    'Rooster',
    'Dog',
    'Pig',
    'Rat',
    'Ox',
    'Tiger',
    'Rabbit',
    'Dragon',
    'Snake',
    'Horse',
    'Sheep',
  ][y % 12];
```

## Strategy

Data Structure: The Chinese Zodiac cycle repeats every 12 years, with each year
associated with a specific animal. The code uses an array to represent the
sequence of Chinese Zodiac animals, with each index corresponding to a specific
year in the cycle.

Calculation: The function calculates the index of the Chinese Zodiac animal in
the array based on the input year. It does this by taking the input year modulo
12 (y % 12), ensuring that the resulting index falls within the range of the
array.

## Implementation

\*\*Input Parameter (y): The function takes a single parameter y, representing
the birth year for which to determine the Chinese Zodiac.

\*\*Array of Chinese Zodiac Animals: The array contains the names of the Chinese
Zodiac animals in the order of their appearance in the 12-year cycle. Each
animal corresponds to a specific index in the array.

\*\*Modulo Operation (y % 12): The input year is divided by 12, and the
remainder (result of modulo operation) determines the index of the Chinese
Zodiac animal in the array.

\*\*Return Value: The function immediately returns the Chinese Zodiac animal
corresponding to the calculated index in the array.

## Possible Refactors

The ZODIAC_ANIMALS array contains the names of the Chinese Zodiac animals in the
order they appear in the 12-year cycle. The chineseZodiac function takes a year
(y) as input. The modulo operator (%) is used to calculate the remainder when
dividing the input year by 12. This remainder corresponds to the index of the
Chinese Zodiac animal in the array. The function returns the Chinese Zodiac
animal corresponding to the calculated index in the ZODIAC_ANIMALS array.

## References

For dan-barrick solution I needed to review Arithmetic operator.

- Arithmetic operator:
  [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
