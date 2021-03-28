
interface Animal {
    run(): void;
}

interface BarkAnimal extends Animal {
    bark(): void;
}

interface FlyAnimal extends Animal {
    fly(): void;
}

class Dog implements BarkAnimal {
    
    run(): void {
        console.log("Dog is running");
    }
    
    bark(): void {
        console.log("Dog is barking");
    }
}

class Bird implements FlyAnimal {
    
    public run(): void {
        console.log("Bird is running");
    }
    
    public fly(): void {
        console.log("Bird is flying");
    }
}
