//Open close principle
class Shape{
    area(){
        throw new Error('Area method should be implemented')
    }
}
class Square extends Shape {
    constructor(size){
        super()
        this.size = size
    }
    area(){
        return this.size ** 2
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }
    area(){
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }
    area(){
        return this.width * this.height
    }
}

class AreaCalculator{
    constructor(shapes = []){
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape)=>{  
            acc += shape.area()         
        }, 0)      
    }
}
const calc = new AreaCalculator([
    new Circle(5),
    new Rect(5, 5),
    new Square(5)
])

console.log(calc.sum())