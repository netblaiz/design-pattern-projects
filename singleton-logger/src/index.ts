import Logger from './logger'

const readline = require('readline')

//get the single instance of Logger
//const logger = Logger.getInstance("logs/app.log", "DEBUG")

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const inputs: string[] = []

const filepath = process.env.FILE_PATH

const logger = Logger.getInstance(filepath, 'ERROR')


//log messages with different levels
logger.log("INFO")
logger.log("DEBUG")
logger.log("WARN")
logger.log("ERROR")

//the same instance is used everywhere
//const anotherLoggerInstance = Logger.getInstance()

//console.log(logger === anotherLoggerInstance)

//anotherLoggerInstance.log("INFO")

//The output should be that all logs appear in the console and in the 'logs/app.log' file.