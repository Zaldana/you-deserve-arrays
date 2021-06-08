// Prompt Sync ===============================

const prompt = require('prompt-sync')({sigint: true});

// User Prompt ===============================

let userArray = prompt('Input your array and receive Index 3    ');

// Convert String Into an Object =============

userArray = JSON.parse(userArray);

// Last Item Definition ======================

const lastItem = userArray[userArray.length -1];

// Index 3 Log ============================

if (userArray[3] === undefined) {

    console.log("No index 3 item, user array last item is:", lastItem);

} else {

    console.log("Index 3 item is:", userArray[3]);

}
