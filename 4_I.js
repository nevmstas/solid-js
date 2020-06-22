// Interface segregation principle

// class Animal {
//     constructor(name){
//         this.name = name
//     }

//     walk(){
//         console.log(`${this.name} is walking` )
//     }

//     swim(){
//         console.log(`${this.name} is swimming` )
//     }

//     fly(){
//         console.log(`${this.name} is flying` )
//     }
// }



class Animal{
    constructor(name){
        this.name = name
    }
}

const swimmer = {
    swim(){
        console.log(`${this.name} is swimming` )
    }
}

const flyer = {
    fly(){
        console.log(`${this.name} is flying` )
    }
}
const walker = {
    walk(){
        console.log(`${this.name} is walking` )
    }
}

class Dog extends Animal{
    
}

class Eagle extends Animal{
    
}

class Whale extends Animal{
    
}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flyer, walker)
Object.assign(Whale.prototype, swimmer)