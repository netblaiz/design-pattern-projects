//define an abstract interface

interface Shape {

	draw(x: number, y: number): void
	erase(): void
}


//implement concrete shapes 

class Circle implements Shape {

	draw(f: number): void {

		console.log('Drawing a Circle')
	}

	erase(): string {

		return 'I am erasing a circle'
	}

}




class Rectangle implements Shape {

	
	draw(x: number, y: number): void {

		console.log(`${x} is the vertical of ${y}`)
		
	}

	erase(): string {

		return 'I am erasing a Rectangle'
	}
}




//create an abstract creator class
abstract class ShapeFactory {

	abstract createShape(): Shape

	//logic for all shape on creation
	renderShape(): void {

		const shape = this.createShape()
		shape.draw(2,3)
	}
}



class CircleFactory extends ShapeFactory {

	createShape(): Shape {
		return new Circle()
	}
}



class RectangleFactory extends ShapeFactory {
	createShape(): Shape {
		return new Rectangle()
	}
} 


function main() {
	let factory: ShapeFactory

	factory = new CircleFactory()
	factory.renderShape()

	factory = new RectangleFactory()
	factory.renderShape()
}



main()
