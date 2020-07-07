//Liskov substitution principle

class Person{

}

class Member extends Person{
    access(){
        console.log('u have access')
    }
}

class Guest extends Person{
    isGuest = true 
}
class Frontend extends Member{
    createFrontend(){
        
    }
}
class Backend extends Member{
    createBackend(){
        
    }
}
class PersonFromDifferentCompany extends Guest{
    access(){
        throw new Error('u dont have access!')
    }
}
function openSecureDoor(person){
    person.access()
}

openSecureDoor(new Frontend())
openSecureDoor(new Backend())
//openSecureDoor(new PersonFromDifferentCompany()) // here should be member