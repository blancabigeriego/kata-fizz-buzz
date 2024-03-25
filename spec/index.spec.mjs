import { FizzBuzz } from "../index.mjs";
describe("FIZZ, BUZZ KATA", () =>{
    it('should return 1 as string', () => {
        const fizzbuzz = new FizzBuzz()
        const result = fizzbuzz.convertNumber(1);
        expect(result).toEqual('1');
    })
})