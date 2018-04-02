// global functions



// 1. Char Swap - Write a JavaScript function to create a new string from an input string from
// the user swapping the position of first and last characters. The string length entered by
// the user must be greater than or equal to 1.


let userString;
function charSwapPrompt(){
    userString = prompt("What is your favorite movie?", "The Martian");
    while (userString.length < 1 || userString == ' ') {
        alert("The title of your movie was not long enough.");
        userString = prompt("What is your favorite movie?", "The Martian");
    }
    if (userString == null){
        alert("You pressed cancel. We will assume you do not have a favorite movie.");
    } else{
        let swappedString = charSwap(userString);
        console.log("Your favorite movie with the first and last characters switched is:  \n", swappedString);
    }
}

function charSwap(string) {
   let newFirst = string.slice(userString.length-1);
   let newLast = string.slice(0,1);
   let restString = string.slice(1,userString.length-1);
   let swappedString = newFirst.concat(restString, newLast);
   return swappedString;
}

charSwapPrompt();

// 2. Hi String - Write a JavaScript function that asks for a string from the user and returns a
// new string adding "Hi" in front of the input string. If the input string begins with "Hi" then
// return the original string. The string length entered by the user must be greater than or
// equal to 1.

function hiString(){
    userString = prompt("What is your full name?", "Mary Jenkins");
    while (userString.length < 1 || userString == ' ') {
        alert("Your input was not long enough.");
        userString = prompt("What is your full name?", "Mary Jenkins");
    }
    if (userString == null){
        alert("You pressed cancel. We will assume you do not have a favorite movie.");
    } else if (userString.startsWith('Hi')){
        console.log(userString);
    } else {
        console.log('Hi ' + userString);
    }
}

hiString();


// 3. Three Chars to Front - Write a JavaScript function to create a new string from an input
// string taking the last 3 characters and adding them to the front of the string. The string
// length entered by the user must be at least 3 characters long.

function threeChars(){
    userString = prompt("Enter a number that is at least 3 digits long", "12345");
    while (userString.length < 3 || userString == ' ' || isNaN(userString)) {
        if (isNaN(userString)){
            alert("That wasn't a number. Try again.");
        } else{
            alert("Your input was not long enough. Try again.");
        }
        userString = prompt("Enter a number that is at least 3 digits long", "12345");
    } 
    if (userString == null){
        alert("You pressed cancel. We will assume you do not have a favorite number.");
    } else {
        let length = userString.length;
        let newFirst = userString.slice(length-3, length);
        userString = userString.slice(0, length-3);
        let newString = newFirst.concat(userString);
        console.log("Your number with the last three digits at the front is: " + newString);
    }
}

threeChars();

// 4. Strings to Sentence - Write a JavaScript function that asks for a list of items from the
// user separated by commas. Convert this to an array without the commas or extra
// spaces. Alert the items back to the user with a single saying that is formed using
// backticks (``).

function stringToSentence(){
    userString = prompt("Enter your favorite color, animal, and sport separated by commas. \n Ex: yellow, sloth, baseball", "yellow, sloth, baseball");
    let numCommas = userString.split(',').length-1;
    while (numCommas != 2){
        alert("You didn't have the right number of items in your list. Make sure there are three items separated by commas. Try again.");
        userString = prompt("Enter your favorite color, animal, and sport separated by commas. \n Ex: yellow, sloth, baseball", "yellow, sloth, baseball");
        numCommas = userString.split(',').length-1;
    }
    userString = userString.toLowerCase();
    let listArr = separateList(userString, 3);
    console.log("Your favorite color is " + listArr[0] + ". That's a great color, and a " + listArr[1] + " is a pretty cool animal! I like to watch " + listArr[2] + " on lazy Sundays!");
}

function separateList(list, numItems){
    let itemArr = [];
    for(let i = 0; i < numItems-1; i++){
        let lengthItem = list.indexOf(',')+1;
        itemArr[i] = list.slice(0,lengthItem-1);
        list = list.slice(lengthItem+1, list.length);
        // console.log(itemArr[i]);
        // console.log(list);
    }
    itemArr[numItems-1] = list;
    // console.log(itemArr);
    return itemArr;
}


stringToSentence();

// 5. Upper or Lower - Write a JavaScript function that asks for a string from the user and
//creates a new string from that string where the first 3 characters are lowercase. If the
// string length entered by the user is less than 3 convert all the characters in upper case.

function upperLower(){
    userString = prompt("What is your favorite song?", "I've Just Seen a Face");
    if (userString.length >= 3){
        newString = userString.slice(0,3).toLowerCase();
        userString = userString.slice(3, userString.length);
        newString = newString.concat(userString);
    } else {
        newString = userString.toLowerCase();
    }
    console.log("Here is your favorite song with the first three characters in lowercase: " + newString);
}

upperLower();


