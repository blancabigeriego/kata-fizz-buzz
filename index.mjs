export class FizzBuzz {
    convertNumber(number) {
        if(number === 1)
        return '1';
        if(number === 2) return '2';
        if(number % 3 === 0) return 'Fizz';
        if(number === 4)  return '4';
    }
}