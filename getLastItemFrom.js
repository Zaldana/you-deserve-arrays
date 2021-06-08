// Prompt Sync ===============================

const prompt = require('prompt-sync')({sigint: true});

// User Prompt ===============================

let userArray = prompt('Input your array     ');

// Convert String Into an Object =============

userArray = JSON.parse(userArray);

// Last Item Definition ======================

const lastItem = userArray[userArray.length -1];

// Last Item Log ============================

console.log(lastItem);

