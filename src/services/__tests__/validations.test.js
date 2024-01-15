// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return false when given 8 characters', () => {
        const result = isValid('12345678');
        expect(result).toBe(false);
    });

    test('should return true when given 1 special character', () => {
        const result = isValid('1234567&');
        expect(result).toBe(true);
    });
});
