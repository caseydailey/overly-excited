"use strict";

// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

//grab an element to print it to
let sentenceDiv = document.getElementById("sentence");

// The addExcitement function should accept the array as the sole argument
function addExcitement (arr) {
    
    //initialize an array to hold the incremented sentence
    //and a counter for bangs. this will tell how many times a third word is reached
    let sent = [];
    let bangs = 1;
    let bang = "!";

    //a good ole for loop
    for (var i = 0; i < arr.length; i++) {

        //if it's a third word   
        if ((i + 1) % 3 === 0){

            //push the word plus however many bangs, 
            //increment the bangs
            sent.push(`${arr[i]}${bang.repeat(bangs)}`);
            bangs+=1;
            sentenceDiv.innerHTML +=`<p>${sent.join(" ")}</p>`;

            //if it's not a third word push just the word
            //and log what you've got so far.
            } else {
                sent.push(arr[i]);
                sentenceDiv.innerHTML +=`<p>${sent.join(" ")}</p>`;
            }
        
    }
}

// Invoke the function and pass in the array
addExcitement(sentence)