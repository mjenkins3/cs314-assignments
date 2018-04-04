// global functions

// separates the items in a list
function separateList(list){

    listNew = list.split(', ');
    
    return listNew;
}

// alerts the user they clicked cancel so nothing will be done for that function
function nullAlert() {
    console.log("You pressed cancel. We won't do anything.");
}

// 1. Char Swap - Write a JavaScript function to create a new string from an input string from
// the user swapping the position of first and last characters. The string length entered by
// the user must be greater than or equal to 1.


let userString;
function charSwapPrompt(){
    userString = prompt("What is your favorite movie?", "The Martian");
   
    if (userString == null){
        nullAlert();
    } else{
        while (userString.length < 1 || userString == ' ') {
            alert("The title of your movie was not long enough.");
            userString = prompt("What is your favorite movie?", "The Martian");
        }
        let swappedString = charSwap(userString);
        console.log("Your favorite movie with the first and last characters switched is:\n", swappedString);
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
    
    if (userString == null){
        nullAlert();
    } else if (userString.startsWith('Hi')){
        console.log(userString);
    } else {
        while (userString.length < 1 || userString == ' ') {
            alert("Your input was not long enough.");
            userString = prompt("What is your full name?", "Mary Jenkins");
        }
        console.log('Hi ' + userString);
    }
}

hiString();


// 3. Three Chars to Front - Write a JavaScript function to create a new string from an input
// string taking the last 3 characters and adding them to the front of the string. The string
// length entered by the user must be at least 3 characters long.

function threeChars(){
    userString = prompt("Enter a number that is at least 3 digits long", "12345");
    
    if (userString == null){
        nullAlert();
    } else {
        while (userString.length < 3 || userString == ' ' || isNaN(userString)) {
            if (isNaN(userString)){
                alert("That wasn't a number. Try again.");
            } else{
                alert("Your input was not long enough. Try again.");
            }
            userString = prompt("Enter a number that is at least 3 digits long", "12345");
        } 
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
   
    
    if (userString == null){
        nullAlert();
    }else {
        let numCommas = userString.split(',').length-1;
        while (numCommas != 2){
            alert("You didn't have the right number of items in your list. Make sure there are three items separated by commas. Try again.");
            userString = prompt("Enter your favorite color, animal, and sport separated by commas. \n Ex: yellow, sloth, baseball", "yellow, sloth, baseball");
            numCommas = userString.split(',').length-1;
        }
        userString = userString.toLowerCase();
        let listArr = separateList(userString);
        console.log(`Your favorite color is ${listArr[0]}. That's a great color, and a ${listArr[1]} is a pretty cool animal! I like to watch ${listArr[2]}  on lazy Sundays!`);
    }
}



stringToSentence();

// 5. Upper or Lower - Write a JavaScript function that asks for a string from the user and
//creates a new string from that string where the first 3 characters are lowercase. If the
// string length entered by the user is less than 3 convert all the characters in upper case.

function upperLower(){
    userString = prompt("What is your favorite song?", "I've Just Seen a Face");
    if (userString == null){
        nullAlert(); 
    } else if (userString.length >= 3){
        newString = userString.slice(0,3).toLowerCase();
        userString = userString.slice(3, userString.length);
        newString = newString.concat(userString);
        console.log("Here is your favorite song with the first three characters in lowercase: " + newString);
    } else {
        newString = userString.toLowerCase();
        console.log("Here is your favorite song with the first three characters in lowercase: " + newString);
    }
}

    

upperLower();


//6. Integer Swap - Write a JavaScript function that asks for a comma separated list of
// numbers from the user and swap the first and last elements of a given array of integers.
// Alert the result to the user. The array length given from the user should be at least 1.

function intSwap(){
    userString = prompt("Enter a set of numbers separated by commas: ", "10, 3, 42, 71");
    
    if (userString == null){
        nullAlert();
    } else {
        while (userString.length < 1){
            alert("That was not a long enough list. Try again.");
            userString = prompt("Enter a set of numbers separated by commas: ", "10, 3, 42, 71");
        }
        let numArr = separateList(userString);
        numArr = swapFirstLast(numArr);

        console.log(`Here is your new list of numbers with with the first and last elements switched ${numArr}`);
    }
}

function swapFirstLast(arr){
    newFirst = arr.pop();
    newLast = arr.shift();
    arr.push(newLast);
    arr.unshift(newFirst);
    return arr;
}

intSwap();

// 7. Longest String - Write a JavaScript function that asks for a comma separated list of
// strings from the user and alerts the longest string from the given array of strings.

function longestString(){
    userString = prompt("Enter a list of some of your favorite words or phrases, separated by commas:");
    if (userString == null){
        nullAlert();
    } else {
        let stringArr = separateList(userString);
        let longestString = getLongestString(stringArr);
        console.log(`The longest string you entered was: ${longestString}`);
    }
   
}

function getLongestString(array){
    let currentLongest = 0;
    let indexLongest = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i].length > currentLongest) {
            currentLongest = array[i].length;
            indexLongest = i;
        }
    }
    return array[indexLongest];
}

longestString();


// 8. Largest Even Number - Write a JavaScript function that asks for a comma separated list
// of numbers from the user. Convert this list to an array of numbers and alert the largest
// even number from the array of integers.

function largestEvenNumber(){
    userString = prompt("Enter a set of numbers separated by commas: ", "10, 3, 42, 71");
    
    if (userString == null){
        nullAlert();
    } else {
        let numArr = separateList(userString);
        numArr.sort(function(a,b){return a-b});
        // console.log(numArr);
        let indexLast = numArr.length-1;
        while (numArr[indexLast] % 2 != 0) {
            indexLast -= 1;
        }

        console.log(`The largest even number in your set was ${numArr[indexLast]}`);
    }
}

largestEvenNumber();


// 9. Current Day Time - Write a JavaScript function that alerts the current day and time in the
// following format:
// Example:
// Today is Friday.
// It is 4:00PM.

function currentDayTime(){
    let day = getDOW();
    let time = getTime();
    console.log(`Today is ${day}. \nIt is ${time}`);
}

function getDOW() {
    let day = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let DOW = weekday[day.getDay()];
    return DOW;
}

function getTime(){
    let period;
    let d = new Date;
    let h = timeFormat(d.getHours());
    if (h > 12 && h < 24){
        h -= 12;
        period = 'PM';
    } else if (h == 24) {
        h = 12;
        period = 'AM';
    } else {
        period = 'AM';
    }
    let m = timeFormat(d.getMinutes());
    let time = h + ":" + m + period;
    return time;
}

function timeFormat(time){
    if (time < 10) {
        time = "0" + time;
    }

    return time;
}

currentDayTime();


// 10. Unlimited Function - Write a JavaScript function that accepts an unlimited number of
// arguments and prints them out in a single string in a single alert.

function unlimitedFunction(){
    userString = prompt("Enter as many words, phrases or numbers as you want, separated by commas:");
    if (userString == null){
        nullAlert();
    } else {
        let stringArr = separateList(userString);
        let arrayAsString = arrayToString(stringArr);

        alert(`Your combined string is:\n${arrayAsString}`);
    }
   
}


function arrayToString(arr){
    let string = '';
    arr = arr.map(item => item + ' ');
    for (let i = 0; i < arr.length; i++){
        string += arr[i];
    }

    return string;
}

unlimitedFunction();