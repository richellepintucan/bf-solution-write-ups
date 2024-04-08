# Remix 1

## Strategy

To improve the provided JavaScript code, we can consider several enhancements
for readability, maintainability, and efficiency:

## Implementation

In this improved version:

The array of Zodiac animals is defined as a constant ZODIAC_ANIMALS outside the
function. The function getChineseZodiac uses a descriptive name and includes
error handling to validate the input year. Error handling ensures that only
valid years after 1900 are accepted as input, providing clear feedback for
invalid inputs. The function is flexible and can accommodate different starting
years by adjusting the subtraction value in the modulo operation (year - 1900)
% 12. These enhancements make the code more readable, maintainable, and robust,
improving its overall quality.

Here's the improved version of the code incorporating these suggestions:

```js
const ZODIAC_ANIMALS = [
  'Rat',
  'Ox',
  'Tiger',
  'Rabbit',
  'Dragon',
  'Snake',
  'Horse',
  'Sheep',
  'Monkey',
  'Rooster',
  'Dog',
  'Pig',
];

function getChineseZodiac(year) {
  if (typeof year !== 'number' || year < 1900) {
    throw new Error('Invalid input: Please provide a valid year after 1900.');
  }

  return ZODIAC_ANIMALS[(year - 1900) % 12];
}
```
