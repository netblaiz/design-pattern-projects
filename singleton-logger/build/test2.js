"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("./test"));
const person1 = new test_1.default('Alice', 'Sandra');
//Greet.subject = 'Kunle'
console.log(person1.greet('Monday'));
