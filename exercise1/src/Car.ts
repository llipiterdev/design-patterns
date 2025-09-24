export class Car {
    private engine: string;
    private color: string;
    private tires: string;
    private sound: string;
    private gps: boolean;
    private headlights: string;
    private sunroof: boolean;
    private reverseCamera: boolean;
    private electric: boolean;
    
    constructor(
        engine: string,
        color: string,
        tires: string,
        sound: string,
        gps: boolean,
        headlights: string,
        sunroof: boolean,
        reverseCamera: boolean,
        electric: boolean
    ) {
        this.engine = engine;
        this.color = color;
        this.tires = tires;
        this.sound = sound;
        this.gps = gps;
        this.headlights = headlights;
        this.sunroof = sunroof;
        this.reverseCamera = reverseCamera;
        this.electric = electric;
    }

    // Se dejan los getters a manera de ejemplo, pero no son necesarios para el patrón builder
    
    getEngine(): string {
        return this.engine;
    }

    getColor(): string {
        return this.color;
    }

    getTires(): string {
        return this.tires;
    }

    getSound(): string {
        return this.sound;
    }

    hasGPS(): boolean {
        return this.gps;
    }

    getHeadlights(): string {
        return this.headlights;
    }

    hasSunroof(): boolean {
        return this.sunroof;
    }

    hasReverseCamera(): boolean {
        return this.reverseCamera;
    }

    isElectric(): boolean {
        return this.electric;
    }

}