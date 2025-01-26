class Animal {
    constructor (name , sound){
        this.animalname = name ;
        this.animalsound = sound ;
    }

    getname(){
        return this.animalname
    }

    getsound(){
        return this.animalsound
    }

    makesound(){
        return ` this animal ${this.animalname} makes a sound ${this.animalsound}`;

    }

}

class dogs extends Animal {
    constructor (name,sound,breed)
    {
        super(name,sound);
        this.dogbreed = breed;

    }

    showdetails(){
        return ` this is a  ${this.dogbreed} named ${this.getname() } and this sound is ${this.getsound()}`;
    }
}

class cats extends Animal{
    constructor (name,sound , color){

        super(name,sound);
        this.catcolor = color;

    }

    showdetails(){
        return ` this is a ${this.color} named as ${this.name} and this animal sound is ${this.sound} `;
    }
}

const dog= new dogs("buddy","WOAH","labrador")
const cat= new cats("hazel","MEOW","white")

console.log(dog.showdetails())
console.log(cat.makesound())

