// Create a function that asks for a true/false from the user ( confirm() ) and handles the
// answer from the user with an if/else statement.
var msg;
function displayJoke() {
    var joke = confirm("Press 'OK' if you would like to read a joke. \nOtherwise press 'Cancel'.");
    if (joke == true){
       msg = "What did the grape say when it was stepped on? Nothing, it just let out a little wine.";
    } else {
        msg = "Ok. No jokes for you.";
    }
}

displayJoke();
console.log(msg);

// Now rewrite that function (but keep that original function in your code) and use a ternary
// operator instead of an if/else statement
var msg2;
function displayJoke2() {
    var joke = confirm("Press 'OK' if you would like to read a joke. \nOtherwise press 'Cancel'.");
    msg2 = joke ? "I'm thinking of reasons to go to Switzerland. The flag is a big plus." : "Ok. No jokes for you";
}

displayJoke2();
console.log(msg2);

// Create a function that asks a user for a NUMBER input ( prompt() ) and handle the users
// response with an alert based on what they type. You should handle the cases of nothing
// being entered, ‘cancel’ being selected, and something other than a number being
// entered. With each case, a different alert() message should be shown to the user.


var num;
function favNumber(){
    num = prompt("Please enter your favorite number", "1234");
    while (isNaN(num) ||num == '') {
        if (isNaN(num)) {
            alert("That's not a number...");
        } else if (num == '') {
    	    alert("You didn't enter anything!");
        }
        num = prompt("Please enter your favorite number", "1234");
    }
    if (num == null){
        alert("You pressed cancel. We will assume you do not have a favorite number.");
    } else{
        console.log("So your favorite number is " + num + "? Interesting...");
    }
    
    
}

favNumber();
console.log(num);

// You will create a constructor function that constructs an object that contains at least 3
// key-value pairs. One of the key-value pairs must be a function that references another
// key in that object

var firstName;
var lastName;
function getUserInfo(){
    firstName = prompt("Please enter your first name:", "Mary");
    while (isNaN(firstName) == false && firstName != null || firstName == ''){
        if (isNaN(firstName) == false) {
            alert("That's a number not a name!");
        } else if (firstName == '') {
    	    alert("You didn't enter anything!");
        }
        firstName = prompt("Please enter your first name:", "Mary");
    }
    if (firstName == null){
        alert("You pressed cancel. We will assume you do not have a first name.");
    }
    lastName = prompt("please enter your last name:", "Jenkins");
    while (isNaN(lastName) == false && lastName != null || lastName == ''){
        if (isNaN(lastName) == false) {
            alert("That's a number not a name!");
        } else if (lastName == '') {
    	    alert("You didn't enter anything!");
        }
        lastName = prompt("Please enter your last name:", "Jenkins");
    }
    if (lastName == null){
        alert("You pressed cancel. We will assume you do not have a last name.");
    }
}

getUserInfo();
console.log(firstName);
console.log(typeof firstName);
console.log(lastName);

function User(first, last, favNum){
    this.firstName = first;
    this.lastName = last;
    this.num = favNum;
}

var currentUser = new User(firstName, lastName, num);
function displayInfo(){
    if (firstName == null && lastName == null && num == null){
        console.log("I learned you do not have a first or last name or a favorite number. Are you really a human?");
    } else if (firstName == null && lastName == null){
        console.log("I learned you do not have a first or last name. Your favorite number is: " + currentUser.num);
    } else if (firstName == null && num == null){
        console.log("I learned you do not have a first name or a favorite number. Your last name is: " + currentUser.lastName);
    } else if (lastName == null && num == null){
        console.log("I learned you do not have a last name or a favorite number. Your first name is: " + currentUser.firstName);
    } else if (firstName == null){
        console.log("I learned you do not have a first name. Your last name is: " + currentUser.lastName + ". Your favorite number is: " + currentUser.num);
    } else if (lastName == null){
        console.log("I learned you do not have a last name. Your first name is: " + currentUser.first + ". Your favorite number is: " + currentUser.num);
    } else if (num == null) {
        console.log("I learned you do not have a favorite number. Your name is: " + currentUser.firstName + + currentUser.lastName);
    } else{
        console.log("I learned that your name is: " + currentUser.firstName + " " + currentUser.lastName + ". Your favorite number is: " + currentUser.num);
    }
}

displayInfo();


// You will create a function that makes a copy of an object and has the option of adding an
// additional key-value pair to the object. There are multiple ways you could do this, so
// interpret it in a way that makes sense to you.

var clone;
function cloneUser() {
    clone = {};
    for (let key in currentUser){
        clone[key] = currentUser[key];
    }

    

    let birthPlace = prompt("Please enter your birth place", "Colorado");
    if (birthPlace !== null){
        let from = {birthplace: birthPlace};
        Object.assign(clone, from); 
    }

    
    console.log("Clone: ", clone);
}


cloneUser();

// // // Create a function declaration that takes 2 strings and has an optional 3rd string
// // // parameter. If there is no 3rd parameter, provide a default. This function will return a
// // // single string incorporating these 3 parameters

// function combineStrings(name, favNum, birthPlace='Planet Earth'){
//     console.log("Name: " + name + ", Favorite Number: " + favNum + ", Birth Place: " + birthPlace);
// }

// combineStrings(currentUser.firstName, currentUser.num, currentUser.birthplace);
// combineStrings(clone.firstName, clone.num, clone.birthplace);

// // Now comment out the above, and rewrite the function as a function expression.

// var combinedStrings = function combineStrings(name, favNum, birthPlace='Planet Earth') {
//     console.log("Name: " + name + ", Favorite Number: " + favNum + ", Birth Place: " + birthPlace);
// }

// combinedStrings(currentUser.firstName, currentUser.num, currentUser.birthplace);
// combinedStrings(clone.firstName, clone.num, clone.birthplace);

// Now comment out the above, and rewrite the function expression using an arrow
// function. Make this arrow function as short as possible.


var combineStrings = (name, favNum, birthPlace='Planet Earth') => {
    console.log("Name: " + name + ", Favorite Number: " + favNum + ", Birth Place: " + birthPlace);
}

combineStrings(currentUser.firstName, currentUser.num, currentUser.birthplace);
combineStrings(clone.firstName, clone.num, clone.birthplace);