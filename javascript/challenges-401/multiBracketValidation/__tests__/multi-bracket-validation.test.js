const multiBracketValidation = require('../multi-bracket-validation');




describe('multiBracketValidation tests', () => {

    test('Can successfully return true in correct case', () => {

        expect(multiBracketValidation('{}')).toBeTruthy();



    });
    test('Can successfully return true in correct case', () => {

        expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();



    });
    test('Can successfully return false in falsy case', () => {

        expect(multiBracketValidation('{]}]')).toBeFalsy();



    });
    test('Can successfully return false in falsy case', () => {

        expect(multiBracketValidation('[}')).toBeFalsy();



    });

});