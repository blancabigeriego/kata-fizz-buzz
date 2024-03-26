export class FizzBuzz {
    convertNumber(number) {
        if (typeof number !== 'number' || !Number.isInteger(number)) return;
    
        let result = '';
        if (number % 3 === 0) result += 'Fizz';
        if (number % 5 === 0) result += 'Buzz';
    
        return result || number.toString();
    }
}