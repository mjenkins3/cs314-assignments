
// Select number to scroll to section


let scrollOne = document.getElementById('buttonOne');
let scrollTwo = document.getElementById('buttonTwo');
let scrollThree = document.getElementById('buttonThree');
let scrollFour = document.getElementById('buttonFour');
let scrollFive = document.getElementById('buttonFive');

function scroll(location) {
    setTimeout(() => {document.getElementById(location).scrollIntoView(true)}, 200);
}

scrollOne.onclick = function() {scroll('one')};
scrollTwo.onclick = function() {scroll('two')};
scrollThree.onclick = function() {scroll('three')};
scrollFour.onclick = function() {scroll('four')};
scrollFive.onclick = function() {scroll('five')};


// 1. Pick a background color

let blueBackground = document.getElementById('blueButton');
let greenBackground = document.getElementById('greenButton');

function changeBackground(color) {
    document.getElementById("one").style.backgroundColor = color;
}

blueBackground.onclick = function() {changeBackground('blue')};
greenBackground.onclick = function() {changeBackground('green')};

// 2. Click the button to change between a pink and orange background:

let pinkButton = document.getElementById('pinkButton');

pinkButton.onclick = function() {changeButton(pinkButton)};

function changeButton(button){
    if (button.innerText=="Click for pink!") {
        button.innerText = "Click for orange!";
        document.getElementById('pinkButton').style.color = 'orange';
        document.getElementById("two").style.backgroundColor = 'pink';
    } else {
        button.innerText = "Click for pink!";
        document.getElementById('pinkButton').style.color = 'pink';
        document.getElementById("two").style.backgroundColor = 'orange';
    }
}

// 3. Input text to add to the list below

let submitButton = document.getElementById('submitButton');
submitButton.onclick = function() {addToList()};



function addToList(){
    let listPfx = document.createElement('li');
    let desiredAdded = document.getElementById('addInput').value;
    let added = document.createTextNode(desiredAdded);
    listPfx.appendChild(added);
    document.getElementById('addList').appendChild(listPfx);
}


// 4. If an item is clicked, remove it from the list.

let list = document.getElementById('removeList');
let listItems = document.querySelectorAll('#removeList li');


for (let i=0; i < listItems.length; i++){
    listItems[i].onclick = function() {
        removeItem(listItems[i]);
    }
}

function removeItem(item) {
    item.parentNode.removeChild(item);
}

// 5. If an item is clicked, select it (highlight it) and de-select everything else.

let highlightList = document.querySelectorAll('#highlightList li');
// let itemOne = document.getElementById('itemOne');
// let itemTwo = document.getElementById('itemTwo');
// let itemThree = document.getElementById('itemThree');
// let itemFour = document.getElementById('itemFour');

function highlight(itemId) {
    document.getElementById(itemId).style.background = 'teal';
    
}

// itemOne.onclick = function() {highlight('itemOne')};
for (let i=0; i < highlightList.length; i++){
    highlightList[i].onclick = function() {
        deselect(highlightList);
        document.getElementById(highlightList[i].id).style.background = 'teal';
    }
}

function deselect(list){
    for (let i=0; i < list.length; i++){
        document.getElementById(list[i].id).style.background = 'none';
    } 
}