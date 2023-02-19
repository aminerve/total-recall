class Hamster{
    constructor(name){
        this.owner = '',
        this.name = name,
        this.price = 15;

    }

    wheelRun(){
        console.log(`squeak squeak`);
    }
    eatFood(){
        console.log(`nibble nibble`);
    }
    getPrice(){
        return this.price;
    }
}

const lilCenat = new Hamster('Lil Cenat the 3rd')
 
console.log(lilCenat);

lilCenat.eatFood()
console.log(lilCenat.getPrice())
lilCenat.wheelRun()

// #2
class Person{
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = []
        this.bankAccount = 0;
    }

    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hey ${this.name}`);
    } 
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
    }
    buyHamster(hampster){
        this.mood+=10;
        this.bankAccount-=hampster.getPrice();
    }
}

const timmy = new Person('Timmy');
for(i=0;i<=5;i++){
    timmy.ageUp()
}
for(i=0;i<=5;i++){
    timmy.eat()
}
for(i=0;i<=5;i++){
    timmy.exercise()
}
for(i=5;i<=9;i++){
    timmy.ageUp()
}

const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster(gus)

for(i=9;i<=15;i++){
    timmy.ageUp()
}
for(i=5;i<=7;i++){
    timmy.eat()
}
for(i=0;i<=2;i++){
    timmy.exercise()
}

console.log(timmy);

