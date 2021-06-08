// Prompt Sync ===============================

const prompt = require('prompt-sync')({sigint: true});

// User Prompt ===============================

let userArray = prompt('Input an array    ');

// Convert String Into an Object =============

userArray = JSON.parse(userArray);

// Is the first item a Number Log ============================

if (typeof userArray[0] === "number") {

    console.log("The first item of an array is a number");

} else {

    console.log("The first item of the array is not a number");

}