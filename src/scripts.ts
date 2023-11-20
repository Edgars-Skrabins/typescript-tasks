// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2));
console.log(sum(1, 10));
console.log(sum(99, 1));

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const getTypeOf = (obj: any): any => typeof (obj);

console.log(getTypeOf(1));
console.log(getTypeOf(false));
console.log(getTypeOf({}));
console.log(getTypeOf(null));
console.log(getTypeOf("string"));
console.log(getTypeOf(["array"]));

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const compareValuesAndTypes = (a: any, b: any): boolean => {
    return a === b;
};

console.log(compareValuesAndTypes(2, 3));
console.log(compareValuesAndTypes(3, 3));
console.log(compareValuesAndTypes(1, "1"));
console.log(compareValuesAndTypes("10", "10"));

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const getNthCharOfString = (word: string, index: number): string => {
    return word.charAt(index - 1);
}

console.log(getNthCharOfString("abcd", 1));
console.log(getNthCharOfString("zyxbwpl", 5));
console.log(getNthCharOfString("gfedcba", 3));

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeFirst3Characters = (a: string): string => {
    return a.slice(3, a.length);
}

console.log(removeFirst3Characters("abcdefg"));
console.log(removeFirst3Characters("1234"));
console.log(removeFirst3Characters("fgedcba"));


// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const getLast3Characters = (a: string): string => {
    return a.slice(a.length - 3, a.length);
}

console.log(getLast3Characters("abcdefg"));
console.log(getLast3Characters("1234"));
console.log(getLast3Characters("fgedcba"));

// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const getFirst3Characters = (a: string): string => {
    return a.slice(0, 3);
}

console.log(getFirst3Characters("abcdefg"));
console.log(getFirst3Characters("1234"));
console.log(getFirst3Characters("fgedcba"));

// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const getFirstHalfOfString = (a: string): string => {
    return a.slice(0, a.length / 2);
}

console.log(getFirstHalfOfString("abcdefgh"));
console.log(getFirstHalfOfString("1234"));
console.log(getFirstHalfOfString("gedcba"));

// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removeLast3Characters = (a: string) => {
    return a.slice(0, a.length - 3);
}

console.log(removeLast3Characters("abcdefg"));
console.log(removeLast3Characters("1234"));
console.log(removeLast3Characters("fgedcba"));

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const getPercentage = (a: number, b: number): number => {
    return a / 100 * b;
}

console.log(getPercentage(100, 50));
console.log(getPercentage(10, 1));
console.log(getPercentage(500, 25));

// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const bunchOfMathStuff = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
    let sum: number = a + b;
    let subtraction: number = sum - c;
    let multiplication: number = subtraction * d;
    let division: number = multiplication / e;
    return Math.pow(division, f);
}

console.log(bunchOfMathStuff(6, 5, 4, 3, 2, 1));
console.log(bunchOfMathStuff(6, 2, 1, 4, 2, 3));
console.log(bunchOfMathStuff(2, 3, 6, 4, 2, 3));

// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const checkIfNumberEven = (a: number): boolean => {
    return a % 2 === 0;
}

console.log(checkIfNumberEven(10));
console.log(checkIfNumberEven(-4));
console.log(checkIfNumberEven(5));
console.log(checkIfNumberEven(-111));

// Task 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const getCharAmountInString = (a: string, b: string): number => {
    let amountOfChar: number = 0;

    for (let i = 0; i < b.length; i++) {

        if (b[i] === a) {
            amountOfChar += 1;
        }
    }

    return amountOfChar;

}

console.log(getCharAmountInString('m', 'how many times does the character occur in this sentence?'));
console.log(getCharAmountInString('h', 'how many times does the character occur in this sentence?'));
console.log(getCharAmountInString('?', 'how many times does the character occur in this sentence?'));
console.log(getCharAmountInString('z', 'how many times does the character occur in this sentence?'));

// Task 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const isNumberWhole = (a: number): boolean => {
    return a === Math.floor(a);
}


console.log(isNumberWhole(4));
console.log(isNumberWhole(1.123));
console.log(isNumberWhole(1048));
console.log(isNumberWhole(10.48));

// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value


const ifSmallerDivideOtherwiseMultiply = (a: number, b: number): number => {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    }
}

console.log(ifSmallerDivideOtherwiseMultiply(10, 100));
console.log(ifSmallerDivideOtherwiseMultiply(90, 45));
console.log(ifSmallerDivideOtherwiseMultiply(8, 20));
console.log(ifSmallerDivideOtherwiseMultiply(2, 0.5));

// Task 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const doThingsIfContains = (a: string, b: string): string => {

    if (a.includes(b)) {
        return b + a
    } else {
        return a + b;
    }
}

console.log(doThingsIfContains("cheese", "cake"));
console.log(doThingsIfContains("lips", "s"));
console.log(doThingsIfContains("java", "script"));
console.log(doThingsIfContains("think, therefore I am", "I "));

// Task 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number


const roundTo2DigitDecimal = (a: number) => {
    return parseFloat(a.toFixed(2));
}

console.log(roundTo2DigitDecimal(2.12397));
console.log(roundTo2DigitDecimal(3.136));
console.log(roundTo2DigitDecimal(1.12397));
console.log(roundTo2DigitDecimal(26.1379));

// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting


const splitIntoIndividualDigits = (a: number): number[] => {

    const digitsString: string = a.toString();

    const digits: number[] = Array.from(digitsString, Number);

    return digits;
}

console.log(splitIntoIndividualDigits(10));
console.log(splitIntoIndividualDigits(931));
console.log(splitIntoIndividualDigits(193278));


// Task 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
//     Write a function that joins these strings together such that they form the following words:
//     'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const formJsCountrysideDowntownString = (a: string, b: string): string => {

    const sentenceWords: string[] = ["Javascript", "Countryside", "Downtown"];

    let firstWord: string = a.replace(/%/g, '');

    let secondWord: string = b.replace(/%/g, '');
    secondWord = secondWord.split("").reverse().join("");

    return firstWord + secondWord;

}

console.log(formJsCountrysideDowntownString("java", "tpi%rcs"));
console.log(formJsCountrysideDowntownString("c%ountry", "edis"));
console.log(formJsCountrysideDowntownString("down", "nw%ot"));

// Task 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number


const isPrime = (a: number): number => {

    let currentNumber: number = a;

    for (let i = 2, s = Math.sqrt(currentNumber); i <= s; i++) {
        if (currentNumber % i === 0) {
            return isPrime(currentNumber + 1);
        }
    }

    return currentNumber;

}

console.log(isPrime(38));
console.log(isPrime(7));
console.log(isPrime(115));
console.log(isPrime(2000));


// Task 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const divisibleHigherNatural = (x: number, y: number): number => {
    if (x % y === 0) {
        return x;
    } else {
        if (x < 0) {
            x = 0;
        }

        if (x === 0) {
            return x;
        }

        while (x % y !== 0) {
            x += 1;
            if (x % y === 0) {
                return x;
            }
        }
    }
}

console.log(divisibleHigherNatural(1, 23));
console.log(divisibleHigherNatural(23, 23));
console.log(divisibleHigherNatural(7, 3));
console.log(divisibleHigherNatural(-5, 7));


// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// TODO: Something does not work right
const twoStringDoingThings = (a: string, b: string): string => {

    let result = '';
    for (let i = 0; i < a.length; i++) {
        result += a[i];
        if ((i + 1) % 2 === 0) {
            result += b;
        }
    }

    return result;
}

console.log(twoStringDoingThings("1234567", "."));
console.log(twoStringDoingThings("abcde", "$"));
console.log(twoStringDoingThings("zxyzxyzxyzxyzxyz", "w"));


// Task 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const incrementOneRelativeToAlphabet = (a: string): string => {

    let aArray: string[] = a.split("");

    for (let i = 0; i < aArray.length; i++) {
        aArray[i] = getNextLetterInAlphabet(aArray[i]);
    }

    return aArray.join("");
}

const getNextLetterInAlphabet = (a: string): string => {
    const alphabetArray: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabetArray.length; i++) {
        if (a === alphabetArray[i]) {
            return alphabetArray[i + 1];
        }
    }

}

console.log(incrementOneRelativeToAlphabet('bnchmf'));
console.log(incrementOneRelativeToAlphabet('bgddrd'));
console.log(incrementOneRelativeToAlphabet('sdrshmf'));


// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const getElementInArrayByIndex = (a: number[], b: number): number => {
    return a[b - 1];
}

console.log(getElementInArrayByIndex([1, 2, 3, 4, 5], 3));
console.log(getElementInArrayByIndex([10, 9, 8, 7, 6], 5));
console.log(getElementInArrayByIndex([7, 2, 1, 6, 3], 1));


// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result


const removeFirst3FromArray = (a: number[]): number[] => {
    return a.slice(3, a.length);
}

console.log(removeFirst3FromArray([1, 2, 3, 4]));
console.log(removeFirst3FromArray([5, 4, 3, 2, 1, 0]));
console.log(removeFirst3FromArray([99, 1, 1]));


// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const get3LastFromArray = (a: number[]): number[] => {
    return a.slice(a.length - 3, a.length);
}

console.log(get3LastFromArray([1, 2, 3, 4]));
console.log(get3LastFromArray([5, 4, 3, 2, 1, 0]));
console.log(get3LastFromArray([99, 1, 1]));


// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const get3FirstFromArray = (a: number[]): number[] => {
    return a.slice(0, 3);
}

console.log("----- Task 27 -----")
console.log(get3FirstFromArray([1, 2, 3, 4]));
console.log(get3FirstFromArray([5, 4, 3, 2, 1, 0]));
console.log(get3FirstFromArray([99, 1, 1]));


// Task 28
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array


const returnLastNArrayElements = (a: number[], n: number): number[] => {
    return a.slice(a.length - n, a.length);
}

console.log("----- Task 28 -----")
console.log(returnLastNArrayElements([1, 2, 3, 4, 5], 2));
console.log(returnLastNArrayElements([1, 2, 3], 6));
console.log(returnLastNArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3));


// Task 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const cleanAFromB = (a: any[], b: any): any => {

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            a.splice(i, 1);
            i--;
        }
    }

    return a;
}


console.log("----- Task 29 -----")
console.log(cleanAFromB([1, 2, 3], 2));
console.log(cleanAFromB([1, 2, '2'], '2'));
console.log(cleanAFromB([false, '2', 1], false));
console.log(cleanAFromB([1, 2, '2', 1], 1));


// Task 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const getArrayElementCount = (a: any[]): number => {
    return a.length;
}

console.log("----- Task 30 -----")
console.log(getArrayElementCount([1, 2, 2, 4]));
console.log(getArrayElementCount([9, 9, 9]));
console.log(getArrayElementCount([4, 3, 2, 1, 0]));


// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const getArrayNegativeNumberCount = (a: number[]): number => {

    let count: number = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            count += 1;
        }
    }

    return count;

}

console.log("----- Task 31 -----")
console.log(getArrayNegativeNumberCount([1, -2, 2, -4]));
console.log(getArrayNegativeNumberCount([0, 9, 1]));
console.log(getArrayNegativeNumberCount([4, -3, 2, 1, 0]));


// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const sortArrayDescending = (a: number[]): number[] => {
    return a.sort((a, b) => b - a);
}

console.log("----- Task 32 -----")
console.log(sortArrayDescending([1, 3, 2]));
console.log(sortArrayDescending([4, 2, 3, 1]));


// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const getSortedAlphabeticalStringArray = (a: string[]): string[] => {
    return a.sort();
}

console.log("----- Task 33 -----")
console.log(getSortedAlphabeticalStringArray(['b', 'c', 'd', 'a']));
console.log(getSortedAlphabeticalStringArray(['z', 'c', 'd', 'a', 'y', 'a', 'w']));


// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const getAverageInArray = (a: number[]): number => {
    let sum: number = 0;

    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }

    return sum / a.length;
}

console.log("----- Task 34 -----")
console.log(getAverageInArray([10, 100, 40]));
console.log(getAverageInArray([10, 100, 1000]));
console.log(getAverageInArray([-50, 0, 50, 200]));


// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

const getLongestString = (a: string[]): string => {
    let longestString: string = "";

    for (let i = 0; i < a.length; i++) {
        if (a[i].length > longestString.length) {
            longestString = a[i];
        }
    }

    return longestString;
}

console.log("----- Task 35 -----")
console.log(getLongestString(["help", "me"]));
console.log(getLongestString(["I", "need", "candy"]));


// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const checkIfArrayElementsAreEqual = (a: any[]): boolean => {

    let comparisonElement = a[0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== comparisonElement) {
            return false;
        }

        comparisonElement = a[i];
    }

    return true;

}

console.log("----- Task 36 -----")
console.log(checkIfArrayElementsAreEqual([true, true, true, true]));
console.log(checkIfArrayElementsAreEqual(['test', 'test', 'test']));
console.log(checkIfArrayElementsAreEqual([1, 1, 1, 2]));
console.log(checkIfArrayElementsAreEqual(['10', 10, 10, 10]));


// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays


const returnManyArrays = (...a: any[]): any[] => {
    return a.reduce((result, arr) => result.concat(arr), []);
}

console.log("----- Task 37 -----")
console.log(returnManyArrays([1, 2, 3], [4, 5, 6]));
console.log(returnManyArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(returnManyArrays([true, true], [1, 2], ['a', 'b']));


// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const sortObjArrayAscending = (a: any[]): any => {
    return a.sort((objA, objB) => objA.b - objB.b);
}

console.log("----- Task 38-----")
console.log(sortObjArrayAscending([{a: 1, b: 2}, {a: 5, b: 4}]));
console.log(sortObjArrayAscending([{a: 2, b: 10}, {a: 5, b: 4}]));
console.log(sortObjArrayAscending([{a: 1, b: 7}, {a: 2, b: 1}]));


// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergeArrays = (a: number[], b: number[]): any => {
    const mergedArray = a.concat(b).filter((value, index, self) => self.indexOf(value) === index);
    return mergedArray;
}

console.log("----- Task 39-----")
console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
console.log(mergeArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));


// Task 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum


const sumGreaterThanB = (a: number[], b: number): number => {

    let sum: number = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b) {
            sum += a[i];
        }
    }

    return sum;
}

console.log("----- Task 40-----")
console.log(sumGreaterThanB([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumGreaterThanB([-10, -11, -3, 1, -4], -3));
console.log(sumGreaterThanB([78, 99, 100, 101, 401], 99));


// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const getMinMaxNumbers = (a: number, b: number): number[] => {

    let newArray: number[] = [];

    for (let i = a; i <= b; i++) {

        newArray.push(i);

    }

    return newArray;
}

console.log("----- Task 41-----")
console.log(getMinMaxNumbers(2, 10));
console.log(getMinMaxNumbers(1, 3));
console.log(getMinMaxNumbers(-5, 5));
console.log(getMinMaxNumbers(2, 7));


// Task 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}


// TODO: No idea what I did here
const getObjectSortedStringNames = (a: string[]): { [key: string]: string[] } => {
    const grouped: { [key: string]: string[] } = {};

    for (const str of a) {
        const firstLetter: string = str.charAt(0).toLowerCase(); // Normalize to lowercase
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(str);
    }

    return grouped;
}

console.log("----- Task 42-----")
console.log(getObjectSortedStringNames(['Alf', 'Alice', 'Ben']));
console.log(getObjectSortedStringNames(['Ant', 'Bear', 'Bird']));
console.log(getObjectSortedStringNames(['Berlin', 'Paris', 'Prague']));


// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const getArbitraryArray = (a: any[], b: number): any[] => {

    let newArray: any[];

    if (b < 6) {
        newArray = [0];
    } else {
        newArray = [b];
    }

    return newArray.concat(a);
}

console.log("----- Task 43-----")
console.log(getArbitraryArray([1, 2, 3], 6));
console.log(getArbitraryArray(['a', 'b'], 2));
console.log(getArbitraryArray([null, false], 11));


// Task 44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const saveNthElementInArray = (a: number[], b: number): number[] => {
    const newArray: number[] = [];

    for (let i = b - 1; i < a.length; i += b) {
        newArray.push(a[i]);
    }

    return newArray;
}

console.log("----- Task 44-----")
console.log(saveNthElementInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(saveNthElementInArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(saveNthElementInArray([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const getObjCountry = (a: { country: string, continent: string }): string => {
    return a.country;
}

console.log("----- Task 45-----")
console.log(getObjCountry({continent: 'Asia', country: 'Japan'}));
console.log(getObjCountry({country: 'Sweden', continent: 'Europe'}));


// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor


const getObjProp = (a: { [key: string]: any }): any => {
    return a['prop-2'];
}

console.log("----- Task 46-----")
console.log(getObjProp({one: 1, 'prop-2': 2}));
console.log(getObjProp({'prop-2': 'two', prop: 'test'}));


// Task 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const getObjSpecificProperty = (a: { [key: string]: string }, b: string): string => {
    return a[b];
}

console.log("----- Task 47-----")
console.log(getObjSpecificProperty({continent: 'Asia', country: 'Japan'}, 'continent'));
console.log(getObjSpecificProperty({country: 'Sweden', continent: 'Europe'}, 'country'));

// Task 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const checkIfObjHas = (a: {}, b: string): boolean => {
    return a.hasOwnProperty(b);
}

console.log("----- Task 48-----")
console.log(checkIfObjHas({a: 1, b: 2, c: 3}, 'b'));
console.log(checkIfObjHas({x: 'a', y: 'b', z: 'c'}, 'a'));
console.log(checkIfObjHas({x: 'a', y: 'b', z: 'c'}, 'z'));

// Task 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const createObj = (a: string): {} => {
    const myObj: { [key: string]: string } = {key: a};
    return myObj;
}

console.log("----- Task 49-----")
console.log(createObj('a'));
console.log(createObj('z'));
console.log(createObj('b'));


// Task 50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const createObjWithValue = (a: string, b: string): {} => {
    const myObj: { [a: string]: string } = {a: b};
    return myObj;
}

console.log("----- Task 50-----")
console.log(createObjWithValue('a', 'b'));
console.log(createObjWithValue('z', 'x'));
console.log(createObjWithValue('b', 'w'));


// Task 51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object


// TODO: Got to look more into how I did this
const createObjOutOfArray = (a: any[], b: any[]): {} => {

    const myObj: { [key: string]: any } = {};

    for (let i = 0; i < a.length; i++) {
        myObj[a[i]] = b[i];
    }

    return myObj;
}

console.log("----- Task 51-----")
console.log(createObjOutOfArray(['a', 'b', 'c'], [1, 2, 3]));
console.log(createObjOutOfArray(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
console.log(createObjOutOfArray([1, 'b'], ['a', 2]));


// Task 52
// Write a function that takes an object (a) as argument
// Return an array with all object keys

const getAllObjKeys = (a: { [key: string]: number }): string[] => {
    return Object.keys(a);
}

console.log("----- Task 52-----")
console.log(getAllObjKeys({a: 1, b: 2, c: 3}));
console.log(getAllObjKeys({j: 9, i: 2, x: 3, z: 4}));
console.log(getAllObjKeys({w: 15, x: 22, y: 13}));


// Task 53
// Write a function that takes an object (a) as argument
// Return the sum of all object values

const getAllObjKeysSum = (a: { [key: string]: number }): number => {
    let numArray: number[] = Object.values(a);
    let sum: number = 0;

    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }

    return sum;
}

console.log("----- Task 53-----")
console.log(getAllObjKeysSum({a: 1, b: 2, c: 3}));
console.log(getAllObjKeysSum({j: 9, i: 2, x: 3, z: 4}));
console.log(getAllObjKeysSum({w: 15, x: 22, y: 13}));


// Task 54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'


// TODO: Not sure how to do this yet
const getObjWithoutKeyB = (a: { [key: string]: number }): { [key: string]: number } => {
    const result: { [key: string]: number } = {};

    for (const key in a) {
        if (key !== 'b') {
            result[key] = a[key];
        }
    }

    return result;
}


// Task 55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const mergeObjects = (a: { [key: string]: number }, b: { [key: string]: number }): { [key: string]: number } => {

    const mergedObject = {...a, ...b};

    if (mergedObject.hasOwnProperty('b')) {
        mergedObject['d'] = mergedObject['b'];
        delete mergedObject['b'];
    }

    return mergedObject;
}

console.log("----- Task 55 -----");
console.log(mergeObjects({a: 1, b: 2}, {c: 3, b: 4, e: 5}));
console.log(mergeObjects({a: 5, b: 4}, {c: 3, b: 1, e: 2}));


// Task 56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyObjValues = (a: { [key: string]: number }, b: number): {} => {

    const newObj: { [key: string]: number } = {};
    for (const key in a) {

        newObj[key] = a[key] * b;

    }

    return newObj;
}

console.log("----- Task 56 -----");
console.log(multiplyObjValues({a: 1, b: 2, c: 3}, 3));
console.log(multiplyObjValues({j: 9, i: 2, x: 3, z: 4}, 10));
console.log(multiplyObjValues({w: 15, x: 22, y: 13}, 6));


// Task 57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const swapObjKeysWithValues = (a: { [key: string]: string }): {} => {
    const newObj: { [key: string]: string } = {};

    for (const key in a) {
        // TODO: Why does this reverse both key and value, not just value
        newObj[a[key]] = key;
    }

    return newObj;
}

console.log("----- Task 57 -----");
console.log(swapObjKeysWithValues({z: 'a', y: 'b', x: 'c', w: 'd'}));
console.log(swapObjKeysWithValues({'2': 'a', '4': 'b', '6': 'c', '8': 'd'}));
console.log(swapObjKeysWithValues({a: '1', z: '24'}));


// Task 58
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

const getObjWithNullEmptyString = (a: { [key: string]: string }): { [key: string]: string | null } => {
    const newObj: { [key: string]: string | null } = {};

    for (const key in a) {
        const value: string = a[key].trim();
        newObj[key] = value === '' ? null : value;
    }

    return newObj;
}

console.log("----- Task 58 -----");
console.log(getObjWithNullEmptyString({a: 'a', b: 'b', c: ''}));
console.log(getObjWithNullEmptyString({a: '', b: 'b', c: ' ', d: 'd'}));
console.log(getObjWithNullEmptyString({a: 'a', b: 'b ', c: ' ', d: ''}));


// Task 59
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

const getObjNames = (obj: { [key: string]: any }): { [key: string]: any } => {
    const newObj: { [key: string]: any } = {
        fn: obj.fn,
        ln: obj.ln
    };

    if (obj.size !== undefined) {
        newObj.size = `${obj.size}cm`;
    }

    if (obj.weight !== undefined) {
        newObj.weight = `${obj.weight}kg`;
    }

    return newObj;
}

console.log("----- Task 59 -----");
console.log(getObjNames({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(getObjNames({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
console.log(getObjNames({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(getObjNames({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));


// Task 60
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

const getObjPersonalInfo = (a: { fn: string; ln: string; age: number; size?: number; email?: string; weight?: number }): {
    fn: string;
    ln: string;
    size?: string;
    weight?: string;
} => {
    const newObj: {
        fn: string;
        ln: string;
        size?: string;
        weight?: string;
    } = {
        fn: a.fn,
        ln: a.ln,
    };

    if (a.size !== undefined) {
        newObj.size = a.size + 'cm';
    }

    if (a.weight !== undefined) {
        newObj.weight = a.weight + 'kg';
    }

    return newObj;
}

console.log("----- Task 60 -----");
console.log(getObjPersonalInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(getObjPersonalInfo({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
console.log(getObjPersonalInfo({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(getObjPersonalInfo({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));


// Task 61
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array


// TODO: Check this out later, brainfuck
const makeObjOutOfArray = (a: number[]): { [key: number]: number } => {
    const newObj: { [key: number]: number } = {};

    a.forEach(i => {
        newObj[i] = (newObj[i] || 0) + 1
    });

    return newObj;
}

console.log(makeObjOutOfArray([1, 2, 2, 3]));
console.log(makeObjOutOfArray([9, 9, 9, 99]));
console.log(makeObjOutOfArray([4, 3, 2, 1]));


// Task 62
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const areDatesEqual = (a: Date, b: Date): boolean => {
    return a === b;
}

console.log("----- Task 62 -----")
console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(areDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));


// Task 63
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// TODO: Is there no easier way to do this?
const getDaysBetween = (a: Date, b: Date): number => {
    const oneDayInMs: number = 24 * 60 * 60 * 1000;
    const differenceInDays: number = Math.round(Math.abs((a.getTime() - b.getTime() / oneDayInMs)));
    return differenceInDays;
}

console.log("----- Task 63 -----");
console.log(getDaysBetween(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(getDaysBetween(new Date('2000-01-01'), new Date('2020-06-01')));

// Task 64
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const compareDateDays = (a: Date, b: Date): boolean => {
    return a.getDate() === b.getDate();
}

console.log("----- Task 64 -----");
console.log(compareDateDays(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(compareDateDays(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(compareDateDays(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(compareDateDays(new Date('2000/11/01'), new Date('2000/01/01')));


// Task 65
// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays

const mergeArraysTogether = (a: number[], b: number[]): number[] => {
    return [...a, ...b];
}

console.log("----- Task 65 -----");
console.log(mergeArraysTogether([1, 2], [3, 4]));
console.log(mergeArraysTogether([1, 2], [3, 4, 5, 6]));

// Task 66
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

const getArrayWithElementLast = (a: string[], b: string): string[] => {
    return [...a, b];
}

console.log("----- Task 66 -----");
console.log(getArrayWithElementLast(['Apple', 'Orange', 'Banana'], 'Kiwi'));


// Task 67
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

const getArrayWithElementFirst = (a: string[], b: string): string[] => {
    return [b, ...a];
}

console.log("----- Task 67 -----");
console.log(getArrayWithElementFirst(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Task 68
// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects

const getObjMerged = (a: {}, b: {}): {} => {
    return {...a, ...b};
}

console.log("----- Task 68 -----");
console.log(getObjMerged({a: 1, b: 2}, {c: 3, d: 4}))
console.log(getObjMerged({a: 1, b: 2}, {c: 3, d: 4, e: 5, f: 6}))


// Task 69
// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

const getFavoriteMovieObj = (a: {}, b: string): {} => {
    return {...a, b};
}

console.log("----- Task 69 -----");
console.log(getFavoriteMovieObj({eyeColor: 'green', age: 10}, 'Garfield'));
console.log(getFavoriteMovieObj({eyeColor: 'blue', age: 15}, 'Twilight'));
