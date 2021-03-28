
class Bird {

    protected isFlying = false;

    fly(): void {
        this.isFlying = true;
    }

}

class Canary extends Bird {

    private altitude = 0;

    /**
     * Cumple con LSP
     * Extiende el funcionamiento del método Bird.fly()
     */
    fly(): void {
        super.fly();
        this.altitude = 1;
    }

}

class Chicken extends Bird {

    private flyAttempts = 0;

    /**
     * No cumple LSP
     * Incumple el contrado heredado de Bird
     */
    fly(): void {
        this.flyAttempts++;
    }

}
