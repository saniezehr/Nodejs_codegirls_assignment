// function getdata(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json() )
//     .then(json => console.log(json) )

// }
// getdata();

class Person {
constructor (name,age){

    this.nameperson = name;
    this.ageperson = age;

}
happy(){
    return `this is my name ${this.nameperson} and my age is ${this.ageperson}`
}
}

const person1 = new Person("sani", 23);
const person2 = new Person("misbah", 16);

console.log(person1.happy())

class Animal {
    constructor (name,age){
    this.name = name;
    this.age = age;

    }
    happy(){
        return `this is my name ${this.name} and my age is ${this.age}`

    }
    speed(){
        return `this is this ${this.happy()}`
    }
}

const animal1 = new Animal("cat",4);
const animal2 = new Animal("hen",5);
console.log(animal1.happy(),animal2.happy());

