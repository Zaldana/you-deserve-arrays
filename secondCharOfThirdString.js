// Prompt Sync ===============================

const prompt = require('prompt-sync')({sigint: true});

// User Prompt ===============================

const userArray = prompt('Input an array of strings   ');

// Convert String Into an Object =============

const array = JSON.parse(userArray);

// Character log =============================================

const itemThree = array[2];


// Is the first item a Number Log ============================

if (typeof itemThree === 'string') {

    const secondCharacter = itemThree[1];
    console.log(secondCharacter);
}

else {

    console.log("ERROR");

}
