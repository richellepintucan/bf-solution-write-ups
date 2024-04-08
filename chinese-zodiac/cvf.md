# [cvf](https://edabit.com/challenge/8xAvdyphm83tzKCKt)

```js
const ZODIAC =
  'Rat Ox Tiger Rabbit Dragon Snake Horse Sheep Monkey Rooster Dog Pig'.split(
    ' ',
  );
const chineseZodiac = (birthYear) => ZODIAC[(birthYear - 4) % 12];
```

## Strategy

A JavaScript code snippet that defines a ZODIAC array containing the Chinese
zodiac signs, and a function chineseZodiac that takes a birth year as input and
returns the corresponding Chinese zodiac sign based on that year.

## Implementation

Initialization of ZODIAC array:

1. const ZODIAC = "Rat Ox Tiger Rabbit Dragon Snake Horse Sheep Monkey Rooster
   Dog Pig".split(" ");
2. The line initializes a constant variable ZODIAC.
3. The string "Rat Ox Tiger Rabbit Dragon Snake Horse Sheep Monkey Rooster Dog
   Pig" represents the twelve Chinese zodiac signs, separated by spaces.
4. .split(" ") method splits this string into an array of substrings, using a
   space character as the separator. This creates an array containing the
   individual zodiac signs.

Definition of chineseZodiac function:

1. The line defines an arrow function chineseZodiac that takes a single
   parameter birthYear.
2. The function returns the corresponding Chinese zodiac sign based on the given
   birthYear.
3. (birthYear - 4) % 12 calculates the index of the zodiac sign in the ZODIAC
   array. birthYear - 4 shifts the calculation so that the zodiac sign "Rat"
   corresponds to the year 0 in the zodiac cycle.
4. % 12 ensures that the index wraps around to stay within the range of 0 to 11,
   corresponding to the twelve zodiac signs.
5. The function implicitly returns the zodiac sign at the calculated index from
   the ZODIAC array.

In summary, this code initializes an array ZODIAC containing the Chinese zodiac
signs and defines a function chineseZodiac to retrieve the zodiac sign based on
a given birth year. The zodiac sign is determined by calculating the index in
the ZODIAC array using the birth year modulo 12, ensuring that it cycles through
the array of zodiac signs appropriately.

## Possible Refactors

This strategy could also be implemented with these Implementation ...

Using an Object instead of Array: Instead of using an array, you can use an
object where the keys represent the years and the values represent the
corresponding zodiac signs. This approach can make the code more readable and
maintainable.

The ZODIAC object contains the names of the Chinese Zodiac animals mapped to
their corresponding index (0 to 11). The chineseZodiac function takes a birth
year (birthYear) as input. The birth year is adjusted by subtracting 4 before
taking the remainder when dividing by 12. This adjustment aligns the start of
the Chinese Zodiac cycle (Rat) with the year 0. The function returns the Chinese
Zodiac animal corresponding to the calculated index in the ZODIAC object.

## References

The split() method splits a string into an array of substrings.

- JavaScript String split():
  [w3schools](https://www.w3schools.com/jsref/jsref_split.asp)
