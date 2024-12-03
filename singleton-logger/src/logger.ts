import path from 'path'
import fs from 'fs'
import 'dotenv/config'


type logLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL'

class Logger {

	private static instance: Logger
	private logFilePath: string
	private logLevel: string



//private constructor to prevent instantiation
	private constructor(logFilePath: string, logLevel: string) { 
	this.logFilePath = logFilePath
	this.logLevel = logLevel

	//check if the logs directory exists, else create if it doesn't
	const logDir = path.dirname(logFilePath)
	if(!fs.existsSync(logDir)) {
		fs.mkdirSync(logDir, { recursive: true })
	}



	//Initialize the log file if it doesn't exist
	if(!fs.existsSync(logFilePath)) {
		fs.writeFileSync(logFilePath, '')
	}
}



//static method to get the single instance
public static getInstance(logFilePath = "logs/app.log", logLevel = "DEBUG"): Logger {

//check if instance of the class has been created, if not creates a new instance but otherwise use initial instance created
	if(!Logger.instance) {

		Logger.instance = new Logger(logFilePath, logLevel)
	}

	return Logger.instance
}



//method to log message
public log(level: logLevel = 'INFO'): void {


	if(this.shouldLog(level)) return

	const message = this.levelMessage[level]

	const timestamp =  new Date().toISOString()

	const formattedMessage = `[${timestamp}] [${level}]: ${message}`

	//log to console
	console.log(formattedMessage)


	//log to file
	this.writeToFile(formattedMessage)
}


//determines if the message should be logged based on log level
private shouldLog(level: string): boolean {
	const levels = ['DEBUG', 'INFO', 'WARN', 'ERROR']

	const state = levels.indexOf(level) >= levels.indexOf(this.logLevel)

	//for debugging 
	//console.log(state)


	return state
}

//writes the log message to a file
private writeToFile(message: string): void {
	const directory = path.dirname(this.logFilePath)
	//if(!fs.existsSync(directory)) {

		//fs.writeFileSync(directory, 'utf8')

		//fs.mkdirSync(directory, { recursive: true })
		fs.appendFileSync(this.logFilePath, message + "\n", "utf-8")
	//}
}

 levelMessage: { [key: string] : string } = {

	INFO: 'Application started successfully.',
	DEBUG: 'Debugging application behavior.',
	WARN: 'A warning about disk space',
	ERROR: 'An error occured in the system',
}

}

export default Logger



