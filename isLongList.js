// Prompt Sync ===============================

const prompt = require('prompt-sync')({sigint: true});

// User Prompt ===============================

let userArray = prompt('Input a long array    ');

// Convert String Into an Object =============

userArray = JSON.parse(userArray);

// Index 3 Log ============================

if (userArray.length >= 10) {

    console.log("The array is at least 10 items long.");

} else {

    console.log("The array is not 10 items long.");

}