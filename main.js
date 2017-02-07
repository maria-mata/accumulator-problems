/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
    var string = "This Works!";
    return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/
var numbers = [1, 2, 3];

function sum(array) {
    var output = array.reduce(function(after, before) {
        return after += before;
    }, 0)
    return output;
};

console.log(sum(numbers));


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/
function doubleNumbers(array) {
    return array.map(function(number) {
        return number * 2;
    }, []);
}

console.log(doubleNumbers(numbers));


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/
function multiplyNumbers(array, num) {
    return array.map(function(item) {
        return item * num;
    }, 0);
}

console.log(multiplyNumbers(numbers));






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

function doubleLetters(string) {
    var array = string.split("");
    var newString = array.map(function(i) {
        return i + i;
    }, []);
    return newString.join("");
};

console.log("abc");


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/
function interleave(array1, array2) {
    var array3 = [];
    for (var i = 0; i < array2.length; i++) {
        array3.push(array1[i]);
        array3.push(array2[i]);
    }
    return array3;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange(number, value) {
    var output = [];
    output.length = number;
    for (var i = 0; i < output.length; i++) {
        output[i] = value;
    }
    return output;
}

console.log(createRange(4, "Hello"));


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(array) {
    var object = {};
    for (var i = 0; i < array.length; i++) {
        object[array[i]] = i;
    }
    console.log(object);
    return object;
}

console.log(flipArray(["quick", "fox"]));

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/
function arraysToObject(array) {
    return array.reduce(function(object, current) {
        object[current[0]] = current[1];
        return object;
    }, {});
}

console.log(arraysToObject([
    [2014, "Horse"],
    [2015, "Sheep"]
]));


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

function reverseString(string) {
    var array = [];
    for (var i = string.length - 1; i >= 0; i--) {
        array.push(string[i])
    }
    return array.join("");
}

console.log(reverseString("hello"));



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/
function repeats(string) {
    var part1 = string.slice(0, string.length / 2);
    var part2 = string.slice(string.length / 2);
    if (part1 === part2) {
        return true;
    } else {
        return false;
    }
}

console.log(repeats("haha"));

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(string) {
    var toArray = string.split("");
    var output = [];
    for (var i = 0; i < toArray.length; i += 2) {
        output.push(toArray[i]);
    }
    return output.join("");
}

console.log(everyOther("abcdef"));

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/
function allEqual(string) {
    if (string === "") {
        return true;
    } else {
        for (var i = 0; i < string.length; i++) {
            if (string[i] === string[i + 1]) {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(allEqual("aaaaa"));



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/
function sumLetters(string) {
    var array = string.split("");
    var sum = array.map(function(number) {
        return parseInt(number)
    }, []).reduce(function(before, after) {
        return after += before;
    }, 0)
    return sum;
}

console.log(sumLetters("246"));


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/
function countVowels(string) {
    var array = string.split("");
    var vowels = array.filter(function(vowel) {
        if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
            return vowel;
        }
    }, []);
    var count = vowels.length;
    return count;
}

console.log(countVowels("you"));


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(string) {
    var array = [];
    for (var i = 0; i < string.length; i++) {
        array.push(string[i])
    }
    return array;
}

console.log(split("you"));

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/
function getCodePoints(string) {
    var array = [];
    for (var i = 0; i < string.length; i++) {
        array.push(string.codePointAt(i))
    }
    return array;
}

console.log(getCodePoints("Hello"));
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/
function letterMap(string) {
    var object = {};
    for (var i = 0; i < string.length; i++) {
        object[string[i]] = i;
    }
    return object;
}

console.log(letterMap("Hey"));

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with
the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/
function letterCount(string) {
    var object = string.split("").reduce(function(obj, current) {
        // If property exists, increment it. If not, create with 1.
        if (current in obj) {
            obj[current]++;
        } else {
            obj[current] = 1;
        }
        return obj;
    }, {});
    return object;
}

console.log(letterCount("Hello"));

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/
function threeOdds(number1, number2) {
  // Can reduce or filter be used here?
    var numArray = [];
    for (var i = number1; i < number2; i++) {
        numArray.push(i);
    }
    console.log(numArray);
    var odds = numArray.filter(function(num) {
        return num % 2 !== 0;
    }, []);
    console.log(odds);
    if (odds.length >= 3) {
        return true;
    } else {
        return false;
    }
}

console.log(threeOdds(0, 6));


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/
function leftPad(string, length, fill) {
    if (string.length >= length) {
        var output = string;
    } else {
        output = fill.repeat(length - string.length).concat(string);
    }
    return output;
}

console.log(leftPad("a", 3, "*"));



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/
function createString(number, letter) {
    if (number <= 0) {
        var string = ""
    } else {
        string = letter.repeat(number);
    }
    return string;
}

console.log(createString(5, "m"));




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/
function factorial(number) {
  // Can reduce or filter be used here?
    var array = [];
    for (var i = 0; i <= number; i++) {
        array.push(i);
    }
    var output = array.filter(function(value) {
        return value !== 0;
    }, []).reduce(function(result, value) {
        return result *= value;
    }, 1);
    return output
}

console.log(factorial(5));



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/









//
