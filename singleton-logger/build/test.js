"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Greet {
    constructor(first, second) {
        //Greet.subject = first
        this.first = first;
        this.object = second;
    }
    greet(day) {
        return `${Greet.subject} says hi to ${this.object} on ${day}`;
    }
}
exports.default = Greet;
