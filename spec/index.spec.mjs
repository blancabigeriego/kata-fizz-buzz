import { FizzBuzz } from "../index.mjs";
describe("FIZZ, BUZZ KATA", () =>{
    it('should return 1 as string', () => {
        const fizzbuzz = new FizzBuzz()
        const result = fizzbuzz.convertNumber(1);
        expect(result).toEqual('1');
    });
    it('should return 2 as a string', ()=> {
        const fizzbuzz = new FizzBuzz()
        const result = fizzbuzz.convertNumber(2);
        expect(result).toEqual('2');
    });
    it('should return fizz for a multiple of 3 number', () => {
        const fizzbuzz = new FizzBuzz()
        const result = fizzbuzz.convertNumber(3);
        expect(result).toEqual('Fizz');
    });
    it('should return 4 as a string if 4 is passed as an argument', () => {
        const fizzbuzz = new FizzBuzz();
        const result = fizzbuzz.convertNumber(4);
        expect(result).toEqual('4');
    });
    it('should work with any number and return Fizz for 3 multiples and Buzz for 5 multiples and FizzBuzz for multiples of both', () => {
        const fizzbuzz = new FizzBuzz();
        const resultThree = fizzbuzz.convertNumber(6);
        expect(resultThree).toEqual('Fizz');

        const resultBuzz = fizzbuzz.convertNumber(20);
        expect(resultBuzz).toEqual('Buzz');

        const resultFizzBuzz = fizzbuzz.convertNumber(15);
        expect(resultFizzBuzz).toEqual('FizzBuzz');

    });
    it('should not return anything if argument is not a number', () => {
        const fizzbuzz = new FizzBuzz();
        const result = fizzbuzz.convertNumber('no es numero');
        expect(result).toBe(undefined);
    })
})