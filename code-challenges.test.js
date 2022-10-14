// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

//const { array } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codeMsg", () => {
    it("converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codeMsg(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeMsg(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeMsg(secretCodeWord3)).toEqual("3cc3ntr1c")
    });
  });
//   FAIL  ./code-challenges.test.js
//   codeMsg
    // ✕ converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
    // ✕ 
    // ✕ 

//   ● codeMsg › converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

    // ReferenceError: codeMsg is not defined

    // =========================================
// b) Create the function that makes the test pass.
/**
 * Create a function named codeMsg
 * the function needs to change certain letters to numbers
 * .replace method could be used if i can get it to continue even past the first occurence
 * spilt the array, .replace the letters with numbers, and .join back together
 * 
 * 
 * ---- conclusion: Ive tried multiple times, rewrote multiple times. Even tried simplifying it. NO-GO :'(
 */

// const codeMsg = (str) => {       //THIS MAY WORK BUT IM NOT SURE DUE TO THE ERROR IN MY TEST!
//     let codeStr =
    
//     str.replace(/a/g, "4").replace(/e/g, "3").replace(/E/g, "3").replace(/i/g, "1").replace(/o/g, "0")
//     return codeStr
// }
//    return str.split() && str.replace("a", 4 && "e", 3 && "i", 1 && "o", 0)---nope
// }
// console.log(letterNum(secretCodeWord1))---- nope

//==================================NEW ATTEMPT===================

/**
 * thought process, keep it simple, and hope fore the best.
 * I wanted to split strings into individual characters so that .replace would consider each character individual strings. (personal theory)- since replace only relaces the first occurence per string, each of the individual ones would be replace as they are each a first occurence in a string.
 */

/**
 * new strat
 * same goal
 * utilize .map and .split with condtional statments
 * split will break the strings down 
 * map will itterate through the strings
 * uitlizes conditionals to convert letters to numbers
 * join the string back together
 */

const codeMsg = (str) => {
    let codedMsg = str.split("").map((value) => {
        if(value === "a" || value === "A"){
        return "4"; 
        } else if(value === "e" || value === "E"){
            return "3"; 
        } else if(value === "i" || value === "I"){
            return "1"; 
        } else if(value === "o" || value === "O"){
            return "0"
        } else
         return value
    }).join("")
    return codedMsg
}

// PASS  ./code-challenges.test.js
// codeMsg
//   ✓ converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.446 s, estimated 1 s


//  ReferenceError: Cannot access 'secretCodeWord1' before initialization

//       19 | describe("codeMsg", () => {
//       20 |     it("converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
//     > 21 |         expect(codeMsg(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//          |                        ^
//       22 |         expect(codeMsg(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       23 |         expect(codeMsg(secretCodeWord3)).toEqual("3cc3ntr1c")
//       24 |         const secretCodeWord1 = "Lackadaisical"

//       at Object.secretCodeWord1 (code-challenges.test.js:21:24)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.652 s, estimated 1 s
// Ran all test suites.

// I cant seem to find how to fix the error in line 21. ======fixed


//==============================================================

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

 const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

describe("fruits", () => {
    it("Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(fruits(letterA)).toEqual(["Mango", "Apricot", "Peach"]);
        expect(fruits(letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
    });
  });

// //   ReferenceError: friuts is not defined
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.542 s, estimated 1 s
// // Ran all test suites.

// // b) Create the function that makes the test pass.
// /**
//  * create a function named fruits
//  * i need to filter the strings that contain the character listed for the variables
// adding filter to filter through arr, 
//  * May need to use a casing method due to Apricot. If I dont, may not pull. toLowerCase
//  */

const fruits = (arr, letter) => {
    let fruitArr = arr.filter((str) => {
    return str.toLowerCase().includes(letter)
    }) 
     return fruitArr
}
// im not sure why I am getting an error in .filter. I know i need to filter it but not quite sure what im doing wrong. if possible, I would like soe help with this.!!!!!!!!!

// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it('takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind', () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
      expect(fullHouse(hand1)).toEqual(true);
      expect(fullHouse(hand2)).toEqual(false);
      expect(fullHouse(hand3)).toEqual(false);
      expect(fullHouse(hand4)).toEqual(true);
    });
  });


// b) Create the function that makes the test pass.
/**
 * create a function named fullhouse
 * create an empty array variable deckHand(chanded from just deck)(deck would be 52 cards... we dont want that) within function
 * utilize a for loop i =index of the array
 * now that I have a forloop, I want to set what my variable deckHand will take in.
 * deckHand will take in index of the array
 * create another variable "value" equals the method Object.values which I will used to return the enumberable properties for deckHand. 
 * create a condtional that determine if the indexes in the array are matching
 * if all indexes have a match, return true, if not, false
 * 
 */

// const fullHouse = (array) => { ====no-go going to add more information. 
//     let deck = array.sort() 
//     if(deck[0] === 2 && deck[1] === 3 && deck[1] === 2 && deck[0] === 3){
//         return true
//     } else 
//     return false
// }
const fullHouse = (array) => {
    const deckHand = []
    for(i of array){
      deckHand[i] = (deckHand[i] || 0) +1
    }
    const cards = Object.values(deckHand)
    if((cards[0] === 2 && cards[1] === 3 || cards[1] === 2 && cards[0] === 3)){
        // && was not working, utilized || *makes sense*
      return true
    }
    return false
  }

//   codeMsg
//   ✓ converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (27 ms)
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind (21 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        3.361 s
