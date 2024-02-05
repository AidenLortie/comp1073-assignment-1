// Assignment 1 | COMP1073 Client-Side JavaScript

// 3. Edit the HTML file to include 5 buttons – each one will pick a random phrase from a
// JavaScript array (use the image on the last page of this assignment to build each of the five
// arrays). Note that the first column is a list of nouns (forming the sentence subject), the second is
// a list of verbs, the third is a list of adjectives, the fourth, another list of nouns, and the fifth
// consists of a number of places (or settings).
// 4. The user will push each of the buttons, and each will concatenate the random word from its
// array, eventually building the text string.
// 5. Create a new button (already built for you. You have to develop on-click functionality) that

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');


// Constants for p tag to display query selectors
const noun1Display = document.querySelector('#choosenNoun1');
const verbDisplay = document.querySelector('#choosenVerb');
const adjectiveDisplay = document.querySelector('#choosenAdjective');
const noun2Display = document.querySelector('#choosenNoun2');
const settingDisplay = document.querySelector('#choosenSetting');
const studentinfo = document.querySelector('#studentId');


// Constants for final buttons and p tags
;
const storyDisplay = document.querySelector('#story');
const playbackButton = document.querySelector('#playback');
const randomButton = document.querySelector('#random');
const resetButton = document.querySelector('#reset');


// Variables for pre-defined arrays
const noun1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const verb = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const adjective = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const noun2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const setting = ['on the moon', 'in the jungle', 'under the sea', 'in the kitchen', 'on the farm', 'in the forest', 'in the desert'];




/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    noun1Display.textContent = noun1[Math.floor(Math.random() * noun1.length)];
    noun1Count++;

    if (noun1Count === noun1.length) {
        noun1Count = 0;
    }
}

function verb_on_click() {
    verbDisplay.textContent = verb[Math.floor(Math.random() * verb.length)];
    verbCount++;

    if (verbCount === verb.length) {
        verbCount = 0;
    }

    
}

function adjective_on_click() {
    adjectiveDisplay.textContent = adjective[Math.floor(Math.random() * noun1.length)];
    adjectiveCount++;

    if (adjectiveCount === adjective.length) {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    noun2Display.textContent = noun2[Math.floor(Math.random() * noun2.length)];
    noun2Count++;

    if (noun2Count === noun2.length) {
        noun2Count = 0;
    }
}

function setting_on_click() {
    console.log('setting');
    settingDisplay.textContent = setting[Math.floor(Math.random() * setting.length)];
    settingCount++;

    if (settingCount === setting.length) {
        settingCount = 0;
    }
}

function reset_on_click() {
    noun1Display.textContent = '';
    verbDisplay.textContent = '';
    adjectiveDisplay.textContent = '';
    noun2Display.textContent = '';
    settingDisplay.textContent = '';
    storyDisplay.textContent = '';
    studentinfo.textContent = '';
}

// concatenate the user story and display
function playback_on_click() {
    storyDisplay.textContent = noun1Display.textContent + ' ' + verbDisplay.textContent + ' ' + adjectiveDisplay.textContent + ' ' + noun2Display.textContent + ' ' + settingDisplay.textContent;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    noun1Display.textContent = noun1[Math.floor(Math.random() * noun1.length)];
    verbDisplay.textContent = verb[Math.floor(Math.random() * verb.length)];
    adjectiveDisplay.textContent = adjective[Math.floor(Math.random() * adjective.length)];
    noun2Display.textContent = noun2[Math.floor(Math.random() * noun2.length)];
    settingDisplay.textContent = setting[Math.floor(Math.random() * setting.length)];
    storyDisplay.textContent = noun1Display.textContent + ' ' + verbDisplay.textContent + ' ' + adjectiveDisplay.textContent + ' ' + noun2Display.textContent + ' ' + settingDisplay.textContent;
}

function show_stuent_info() {
    studentinfo.textContent = "LUSN: 1217609 GCSN: 200279899 Name: Aiden Lortie";
}


/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
resetButton.addEventListener('click', reset_on_click);
resetButton.addEventListener('mouseout', show_stuent_info);

