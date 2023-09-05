// Day 2: Exercises

/* 1- Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'. */
const string = "30 Days Of JavaScript";

/* 2- Print the string on the browser console using console.log() */
console.log(string);

/* 3- Print the length of the string on the browser console using console.log() */
console.log(string.length);

/* 4- Change all the string characters to capital letters using toUpperCase() method */
let stringUpperCase = string.toUpperCase();
console.log(stringUpperCase);

/* 5- Change all the string characters to lowercase letters using toLowerCase() method */
let stringLowerCase = string.toLowerCase();
console.log(stringLowerCase);

/* 6- Cut (slice) out the first word of the string using substr() or substring() method */
const sliceString = "JavaScript";
console.log(sliceString.slice(1));

/* 7- Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript. */
const slicePhrase = "30, dias de JavaScript.";
console.log(slicePhrase.split(" "));

/* 8 - Check if the string contains a word Script using includes() method */
const stringContainsWordScript = "JavaScript";
console.log(
  "stringContainsWordScript",
  stringContainsWordScript.includes("Script")
);

/* 9- Split the string into an array using split() method */
const stringSplit = "JavaScript";
console.log("stringSplit", stringSplit.split(""));

/* 10- Split the string 30 Days Of JavaScript at the space using split() method */
const stringSplit2 = "30 Days Of JavaScript";
console.log("stringSplit2", stringSplit2.split(" "));

/* 11- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array. */
const splitCompanies =
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log("splitCompanies", splitCompanies.split(", "));

/* 12- Change 30 Days Of JavaScript to 30 Days Of Python using replace() method. */
const changeStringUseReplace = "30 Days Of JavaScript";
console.log(
  "changeStringUseReplace",
  changeStringUseReplace.replace("JavaScript", "Python")
);

/* 13- Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript */
const useIndexOf = "30 Days Of JavaScript"
console.log("useIndexOf", useIndexOf.indexOf("a"))

/* 14- Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript. */
const useLastIndexOf = "30 Days Of JavaScript"
console.log("useLastIndexOf", useLastIndexOf.lastIndexOf("a"))
