/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let fruit = 'watermelon'

// 2.) Change the value of this variable
fruit = 'lemon'

// 3.) Change the data type of this variable
fruit = 3

// 4.) Create another variable and the one from above to concatenate
let combo = 'onion' + fruit

// 5.) Use any of the variables above or create new ones and print using string interpolation
let veggie = 'peppers'
let snack = 'hummus'
// console.log(`I love to eat ${veggie} with ${snack}!`)

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let firstName = 'Sabrina'
let letter = firstName.charAt(4)
// console.log(letter)

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// Unicode is an industry standard for consistent encoding, representation, and handling of written text expressed in most of the world's writing systems. 
// console.log("Teddy".charCodeAt(2)) // returns the value of "d" in UTF-16

// Using fromCharCode() - make it readable for us :). You'll see!
// console.log(String.fromCharCode(72, 101, 108, 108, 111)) // method translates UTF-16 numbers from ASCII table into text

// Take your first and last name and concat()
// console.log("Lana ".concat("Kim"))

// Create a string and make it return true using startsWith()
const string1 = "Today is Thursday"
// console.log(string1.startsWith("Tod"))

// Now use any variable with endsWith() and return false
// console.log(string1.endsWith("!"))

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, ' + 'and sighed deeply.'
// console.log(ozgur) 
// console.log(ozgur.includes("Moon"))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
// console.log(joshHadALittleLambOopsCow.indexOf('cow')) // index of cow is 149

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
//  console.log(vanessa.lastIndexOf("Vanessa"))
console.log(vanessa.substring(0, vanessa.lastIndexOf('Vanessa')) + vanessa.substring(vanessa.lastIndexOf('Vanessa')+7)) // BONUS

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
// console.log(noWeCantTeo.length) //Oh yes we can Teo!! The string length is 30.

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
// console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta'))

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
// console.log(joshIsLookingForWifey.search("wifey 2"))

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
// console.log(pizzaSentence.slice(7))

// Now using the pizza sentence, return only pizza (before the comma)
// console.log(pizzaSentence.slice(0, 5))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
// const newSplit = splitTheBill.replace("and ", "").split(" ") // ANOTHER OPTION // Remove "and" and replace it with nothing
// console.log(newSplit) // ANOTHER OPTION // 
console.log(splitTheBill.replace("and ", "").replace(/[,]\s/g," ").split(" "));
console.log(splitTheBill.replace(/and /, "").replace(/[,]\s/g,"").split(''));
// Split() puts into an array

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
// console.log(splitTheBill.split([])) // Or can write split(' ') for the same effect

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// console.log(angry.toLowerCase())

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
const tuanSaid = "I CANNOT TAKE THIS ANYMORE"
// console.log(tuanSaid.toLowerCase())

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
// console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase())

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
// console.log(basicGreeting.substring(1, 4))

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
// console.log(ohReally.substring(0, 10))

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
// console.log(aslDays.substring(15))

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let loveHandles = "    extra wide   "
// console.log(loveHandles.trim()) // Removes white space from both ends of a string

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

// console.log(a < b)
// console.log(c > b)
// console.log(d === d)
// console.log(d != a)
// console.log(a < 15)
// console.log(a + b === c)
// console.log(c > b === a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
for (let i = 0; i < 10; i++) {
  console.log(`${i+1} The room has been spinning like crazy`)
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
for (let t = 0; t < 20; t++) {
  console.log(`${t+1} My vision is spinning`)
}

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let t = 0
while (t < 20) {
  console.log(`${t+1} I'm sorry`);
  t++;
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}
for (const property in whateverQueenBeySaid) {
  console.log(`${property}`)
  // console.log(`${property}: ${whateverQueenBeySaid[property]}`);
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for (const index in lana){
  console.log(`${index}`);
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
for (const element of tia){
  console.log(element)
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']

perscholas.forEach(function(element) {
  const myString = "PS "
  console.log(myString + element)
}); 

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push() // adds one or more elements to the end of an array and returns the new length of the array
// pop() // removes the last element from an array and returns that element. This method changes the length of the array.
// unshift() // adds one or more elements to the beginning of an array and returns the new length of the array.
// shift() // removes the first element from an array and returns that removed element. This method changes the length of the array
// concat() // used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// splice() // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// slice() // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// sort() // sorts the elements of an array in place and returns the sorted array. The default sort order is ascending
// includes() // determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// indexOf() // returns the first index at which a given element can be found in the array, or -1 if it is not present.
// length // property of an object which is an instance of type Array sets or returns the number of elements in that array.

const fruits = ['apple', 'banana', 'orange']
console.log(fruits[1])
// Print banana

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(" "))

// Remove orange
fruits.pop()
console.log(fruits)

// Add strawberry, kiwi, and grapes at the end
fruits.push('strawberry', 'kiwi', 'grapes')
console.log(fruits)

// Remove apple
fruits.shift()
console.log(fruits)

// Add mango at the beginning of the array
fruits.unshift('mango')
console.log(fruits)

// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, 'lemon', 'grapefruit')
console.log(fruits)

// Remove banana and strawberry
fruits.splice(3, 2)
// (fruits.splice(fruits.indexOf('banana'), 2)
// console.log(fruits)
console.log(fruits)

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ['dragonfruit', 'mangosteen', 'guava']
const allFruits = fruits.concat(exoticFruits)
console.log(allFruits)

// Print the last two exotic fruits without altering the newly concatenated array.
console.log(allFruits.slice(-2))

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
console.log(monalissaIsMessy.sort())

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
console.log(mirrorMirrorOnTheWall.reverse())

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
const arrayRafael = RafaelNoBadWords.split(" ")
// console.log(arrayRafael)
console.log(arrayRafael.filter(arrayRafael => arrayRafael.indexOf('badword')).join(" "))


// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const sumNumbers = numbersToAddUp.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log(sumNumbers)

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const newArray = [...numbersToAddUp]
console.log(newArray)


// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const arr1 = ['one', 'two']
const arr2 = ['three', 'four']
let arr3 = [...arr1, ...arr2]
console.log(arr3)

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
arr3 = [...arr3, 'five']
console.log(arr3)

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
arr3 = ['six', ...arr3]
console.log(arr3)

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
console.log(donutShop[1][0][1])

// Tosi wants ihatethis. :) Print!
console.log(donutShop[2][0][0][1][0])

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'

// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
let teo = "person"
let gender = "male"
let hungerStatus = "hungry"

if (teo === "person"){
  console.log('Teo is a person!')

if (gender === "male"){
  console.log('You got it right!')
  if (hungerStatus === "hungry"){
    console.log("Let's buy Teo some tacos!")
  } else if (hungerStatus === "not hungry") {
    console.log("He doesn't need to eat.")
  } else {
    console.log("If Teo is not hungry, am I hungry?")
  }
} else {
  console.log('Wrong. Teo is going to remove you from the class.')
}

} else {
  console.log('Teo is not a person!')
}


// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
let gustavo = "coolest"
let trueStatus = gustavo === "coolest" ? 'You got that right!' : 'James wants to argue. He says he\'s the best!'
console.log(trueStatus)

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting(){
  console.log('Hello, ma\'amsir!')
}
sayGreeting()

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
function randomString(string){
  console.log(`This is my ${string}`)
}
randomString('teddy bear')

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
const num1 = 3
const num2 = 91
const num3 = 1
function add(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
add(num1, num2, num3)

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts'
function fightClub(name) {
  if (name === "Teo") {
    return '1st rule: You do not talk about Fight Club.'
  } else if (name === "Manara") {
    return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
  } else if (name === "Liv") {
    return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
  } else if (name === "Devin") {
    return '4th rule: Only two guys to a fight.'
  }
  else {
    return 'No shirts'
  }
}
console.log(fightClub("Liv"))

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello(){
  console.log("Hello")
  return () => {
    console.log("Goodbye")}
  }
hello()
()

// Create a function expression with your first name as the variable and then print your first and last name
const lanaFirstName = function(first, last) {
  const nameCombined = first + " " + last
  return nameCombined;
}
lanaFirstName('Lana', 'Kim')
console.log(lanaFirstName('Lana', 'Kim'))

// Create an arrow function that accepts a number and have it return that number doubled
const doubleNumber = (number) => {
  let double = number * 2
  return double
}
doubleNumber(5)
console.log(doubleNumber(5))

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
let human = {
  name: "Bruno Mars",
  age: 36,
  location: "Los Angeles"
}

// Access the name using dot notation
console.log(human.name);

// Access the age using square brackets
console.log(human.age);

// Use object destructuring to access location
const {location} = human
console.log(location)

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
const {abilities} = bulbasaur.abilities;
console.log(bulbasaur.abilities[0])

// Print cut
const {moves} = bulbasaur.moves;
console.log(bulbasaur.moves[2])

// Print Bulbahhhh!!!!!
const {sound} = bulbasaur.sound;
bulbasaur.sound()

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7
console.log(bulbasaur.height)

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1
console.log(bulbasaur.order)

// Print an array that contains every single properties in bulbasaur
const bulbArr = Object.entries(bulbasaur)
console.log(bulbArr)

// Print every single properties one by one in the console
const bulbProperties = Object.getOwnPropertyNames(bulbasaur) 
console.log(bulbProperties) 

// Print an array that contains every single values in bulbasaur
const bulbValues = Object.values(bulbasaur)
console.log(bulbValues)