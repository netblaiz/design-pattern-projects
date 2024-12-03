"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const readline = require('readline');
//get the single instance of Logger
//const logger = Logger.getInstance("logs/app.log", "DEBUG")
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inputs = [];
const logger = logger_1.default.getInstance('logs/app.log', 'ERROR');
//log messages with different levels
logger.log("INFO");
logger.log("DEBUG");
logger.log("WARN");
logger.log("ERROR");
//the same instance is used everywhere
//const anotherLoggerInstance = Logger.getInstance()
//anotherLoggerInstance.log("Another message from the same logger instance.", "INFO")
//The output should be that all logs appear in the console and in the 'logs/app.log' file.
