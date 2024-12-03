"use strict";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inputs = [];
console.log('Enter inputs (type "exit" to finish):');
rl.on('line', (input) => {
    if (input.trim() === 'exit') {
        console.log('Collected inputs:', inputs);
        rl.close();
    }
    else {
        inputs.push(input.trim());
    }
});
