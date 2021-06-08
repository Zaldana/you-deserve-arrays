// Prompt Sync ===============================

const prompt = require('prompt-sync')({sigint: true});

// User Prompt ===============================

let userArray = prompt('Input your array       ');

// Convert String Into an Object =============

userArray = JSON.parse(userArray);


// First Item Log ============================

console.log(userArray[0]);