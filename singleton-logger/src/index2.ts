/*
import fs from 'fs';
import path from 'path';

class Logger {
  private static instance: Logger;
  private logFilePath: string;

  private constructor() {
    this.logFilePath = path.join(__dirname, 'app.log');

    // Ensure the log file exists
    if (!fs.existsSync(this.logFilePath)) {
      fs.writeFileSync(this.logFilePath, '', 'utf8');
    }
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;

    console.log(`Writing to log file: ${logEntry}`); // Debugging purpose
    fs.appendFileSync(this.logFilePath, logEntry, 'utf8');
  }
}

export default Logger;

// Example usage:
const logger = Logger.getInstance();
logger.log("This is a new log message.");
logger.log("This is the next log message.");
logger.log("This is the third log message.");
*/
