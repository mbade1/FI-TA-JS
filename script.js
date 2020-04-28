/*Strings Lab!

Learn how to manipluate strings and practice interpolating with template literals

Strong points:
  - Strings are made up of a collection of characters wrapped in single/double quotes, or back ticks.
'Hello!' === "Hello!" === `Hello!`
To contactenate strings together, 2 methods:
  1. + 
    example: 
    var guest = "Ernie";
    "Hello" + guest + "!";
  2. ${}
    example:
    var guest = "Ernie";
    `Hello ${guest}!`;
    this example ONLY works with back ticks

STRINGS LAB:
*/


var greeting = "Hello, everybody!"; //fill in with 'Hello, everybody!'
 
var specialGuest = "Neil deGrasse Tyson"
 
var greetSpecialGuest = "Hello, " + specialGuest + "!"; //fill in to === Hello, Neil deGrasse Tyson!
 
var topic = "space";
 
var conversation = `Let\s talk about ${topic}.`;//should === Let\s talk about space.





/* FUNCTIONS LAB

Objectives: Practice writing functions, explain basics of working with strings, explain difference b/n return and console.log(), practice using return and console.log();

*/

function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());

}

function sayHiToGrandma(string) {
  if (string.toLowerCase === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase === string) {
    return "YES INDEED!";
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, Grandma.';
  }

}





/*  FIX THE SCOPE LAB

Obj: explore scope in JS, exercise bug-finding skills related to scope issues




*/


/* BEATLES LOOPS LAB - REVIEW THIS LAB!!!!
  Obj: Build a for loop, build a while loop, build a do-while loop
  Build 3 functions with specific parameters for each function

*/

/* Function one: theBeatlesPlay: 
    Create a function theBeatlesPlay, which accepts two parameters--an array of musicians and an array of instruments.

* Create a variable with an empty array.
* Use a `for loop`, which iterates over the array of musicians. Be careful
  about what value you set your `counter` variable to store. (Hint: Think
  about what the first index of an array is). 
* The first time through the loop, it should create a string using the _first_
  index of the musicians array **and** the first index of the instruments
  array: `"John Lennon plays guitar"`. 
* Add this string to the empty array you created. The loop should make the
  same sentence for every member of the musicians array. 
* The function should return the array of new strings containing what
  instruments each musician plays.

*/

const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

console.log(theBeatlesPlay(musicians, instruments));

/* Function two: johnLennonFacts
    Create a function johnLennonFacts.
  * This function will accept one argument, an array of facts about John
  Lennon (note that it might not be exactly the following facts):
 
```js
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
```
 
* Use a while loop to loop over the facts array and add `"!!!"` to the end of
every fact.
* Return an array of strings with exclamation points.
*/

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while (facts.length > i) {
   arr.push(facts[i] + "!!!");
   i++
  }
  return arr;
}

console.log(johnLennonFacts(facts));

/* function iLoveTheBeatles
Create a function iLoveTheBeatles which accepts a number as a parameter.

* The function should create a variable that stores an empty array. 
* Implement a do-while loop inside the function that adds `"I love the
  Beatles!"` to the empty array. 
* The loop should then increment the number passed in as a parameter. The
  condition of the loop should check to see that the parameter number is
  less than `15`. It should contain a number of strings that represents the
  difference between the input number and `15`.
* Return the array with the strings `"I love the Beatles!"`.
*/
function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}

console.log(iLoveTheBeatles(18));

/*DELI COUNTER LAB

A pretty important deli needs somebody to program the "Take a Number" feature for their counter.

At the beginning of the day, the deli is empty and is represented by an empty array, like var katzDeliLine = [];. However, you don't need to code the array as a variable, since the test scripts will create it and pass it to the functions you are about to build.

Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept two parameters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as "Welcome, Ada. You are number 1 in line.". And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

Build a function nowServing. This function should accept the current line of people (katzDeliLine) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

Build a function currentLine that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". You don't have to use katzDeliLine as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return "The line is currently empty."
*/

//takeANumber adds customer to line. Returns customer’s name and place in line.
// nowServing announces who they’re serving. Returns customer’s name they’re serving then removing customer from line.
// currentLine reads people in line. Returns a list of numbered names of all customers in line.


var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  //This line will fill the katzDeliLine array, showing the total number of people in line at the deli.
  katzDeliLine.push(name); 
  //This statement gives the customer their name and place in line. It caan also be presented like this: `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line." 
}

function nowServing(num) {
  //to be able to show whether or not anyone is in line, use an if/else statement.
  if (num.length === 0) { //if no one is in line, then display "There is nobody waiting to be served!" 
    return "There is nobody waiting to be served!"
  //if there are names in the line, then
  } else {
    //we get the name of the person in the front of the katzDeliLine.
    var name = num[0];
    //we splice the first person from the list (index 0), so we can show that they are currently being served (on line below). Every time this function is executed, we get the next person in line.
    num.splice(0, 1);
    //this line then announces who the deli is serving. 
    return "Currently serving " + name + ".";//
  }
}

/* nowServing(katzDeliLine) {} can also be shown this way. This method flips the if statement by addressing who is being served first, then if the line is empty, it outputs "There is nobody waiting to be served!"
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."; //.shift() can be used to return AND remove the first index, and show it in the return statement. 
  } else {
      return "There is nobody waiting to be served!";
  }
}

*/




function currentLine(movingLine) {
  var line = []; 
  //I started backwards on this - if no one is in the line, start with the return statement "The line is currently empty"
  if (movingLine.length === 0) {
    return "The line is currently empty.";
  //If there are people in line, then we need to figure out how many people are in line. Since the part of the statement "The line is currently:" does not change with each person, I pulled this as the beginning part of the return statement. 
  } else {
    //STEP 2: I need to get each person in line and a marker to show their position. So, a for loop...
    for (var i = 0; i < movingLine.length; i++) {
      //Add to the array the position (i + 1 because i = 0. People want to know that if they're first in line, they're not 0-indexed). Then I fill in the rest of the changing part (based on each iteration) of the return statement. So, add the ". " add the iterated index in question, then add ", ". This can also be typed like this: line += `${(i + 1)}. ${movingLine[i]}, `;
      line += (i + 1) + ". " + movingLine[i] + ", "
    }
    line = line.slice(0, line.length - 2)
    //STEP 1: return statement was filled in first, then step 2.
    return "The line is currently: " + line
  }
}

console.log(takeANumber(katzDeliLine, "Ada")); // "Welcome, Ada. You are number 1 in line."
console.log(takeANumber(katzDeliLine, "Grace")); // "Welcome, Grace. You are number 2 in line."
console.log(takeANumber(katzDeliLine, "Kent")); // "Welcome, Kent. You are number 3 in line."
 
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
 
console.log(nowServing(katzDeliLine)); // "Currently serving Ada."
 
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent"
 
console.log(takeANumber(katzDeliLine, "Matz")); // "Welcome, Matz. You are number 1 in line."
 
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 
console.log(nowServing(katzDeliLine)); // "Currently serving Grace."
 
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Kent, 2. Matz"