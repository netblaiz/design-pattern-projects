"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class Logger {
    //private constructor to prevent instantiation
    constructor(logFilePath, logLevel) {
        this.levelMessage = {
            INFO: 'Application started successfully.',
            DEBUG: 'Debugging application behavior.',
            WARN: 'A warning about disk space',
            ERROR: 'An error occured in the system',
        };
        this.logFilePath = logFilePath;
        this.logLevel = logLevel;
        if (!fs_1.default.existsSync(logFilePath)) {
            fs_1.default.writeFileSync(logFilePath, '', 'utf8');
        }
    }
    //static method to get the single instance
    static getInstance(logFilePath = "logs/app.log", logLevel = "DEBUG") {
        if (!Logger.instance) {
            Logger.instance = new Logger(logFilePath, logLevel);
        }
        return Logger.instance;
    }
    //method to log message
    log(level = 'INFO') {
        if (this.shouldLog(level))
            return;
        const message = this.levelMessage[level];
        const timestamp = new Date().toISOString();
        const formattedMessage = `[${timestamp}] [${level}]: ${message}`;
        //log to console
        console.log(formattedMessage);
        //log to file
        this.writeToFile(formattedMessage);
    }
    //determines if the message should be logged based on log level
    shouldLog(level) {
        const levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];
        const state = levels.indexOf(level) >= levels.indexOf(this.logLevel);
        //for debugging 
        //console.log(state)
        return state;
    }
    //writes the log message to a file
    writeToFile(message) {
        const directory = path_1.default.dirname(this.logFilePath);
        //if(!fs.existsSync(directory)) {
        //fs.writeFileSync(directory, 'utf8')
        //fs.mkdirSync(directory, { recursive: true })
        fs_1.default.appendFileSync(this.logFilePath, message + "\n", "utf-8");
        //}
    }
}
exports.default = Logger;
