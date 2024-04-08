'use strict';

import { chineseZodiac } from './mysolution.js';

// Unit tests for the chineseZodiac function
describe('chineseZodiac function', () => {
    test('should return "Monkey" for the birth year 2004', () => {
        expect(chineseZodiac(2004)).toEqual('Monkey');
    });

    test('should return "Rooster" for the birth year 2017', () => {
        expect(chineseZodiac(2017)).toEqual('Rooster');
    });

    test('should return "Dog" for the birth year 2018', () => {
        expect(chineseZodiac(2018)).toEqual('Dog');
    });

    test('should return "Pig" for the birth year 2019', () => {
        expect(chineseZodiac(2019)).toEqual('Pig');
    });
});
