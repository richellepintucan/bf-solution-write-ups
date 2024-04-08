'use strict';

/**
 * Create a function that takes a year as an argument and returns the corresponding Chinese Zodiac.
 *
 * @param {number} year - The year for which to determine the Chinese Zodiac.
 * @returns {string} The Chinese Zodiac animal corresponding to the given year.
 */

export const chineseZodiac = (birthYear) => {
    return [
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
    ][birthYear % 12];
};
