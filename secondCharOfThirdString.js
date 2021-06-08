// Prompt Sync ===============================

const prompt = require('prompt-sync')({sigint: true});

// User Prompt ===============================

let userArray = prompt('Input an array of strings   ');

// Convert String Into an Object =============

userArray = JSON.parse(userArray);

// Character log =============================================

let itemThree = userArray[2];

console.log(itemThree);

console.log(typeof itemThree);

characters = JSON.parse(itemThree);

console.log(typeof characters);

// Is the first item a Number Log ============================

//if (typeof characters[1] === "string") {


 //   console.log("string");

//} else {

 //   console.log("error");

//}