class Greet {

	private static subject: string
	first: string
	object: string

	constructor(first: string, second: string) {
		//Greet.subject = first
		this.first = first
		this.object = second
	}

	public greet(day: string) {

		return `${Greet.subject} says hi to ${this.object} on ${day}`
	}
}

export default Greet