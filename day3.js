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