import { Car } from "./Car";

export class CarBuilder {
    private engine: string = "V4";
    private color: string = "Red";
    private tires: string = "All-season";
    private sound: string = "Standard";
    private gps: boolean = false;
    private headlights: string = "Halogen";
    private sunroof: boolean = false;
    private reverseCamera: boolean = false;
    private electric: boolean = false;

    public setEngine(engine: string): CarBuilder {
        this.engine = engine;
        return this;
    }
    public setColor(color: string): CarBuilder {
        this.color = color;
        return this;
    }
    public setTires(tires: string): CarBuilder {
        this.tires = tires;
        return this;
    }
    public setSound(sound: string): CarBuilder {
        this.sound = sound;
        return this;
    }
    public setGPS(gps: boolean): CarBuilder {
        this.gps = gps;
        return this;
    }
    public setHeadlights(headlights: string): CarBuilder {
        this.headlights = headlights;
        return this;
    }
    public setSunroof(sunroof: boolean): CarBuilder {
        this.sunroof = sunroof;
        return this;
    }
    public setReverseCamera(reverseCamera: boolean): CarBuilder {
        this.reverseCamera = reverseCamera;
        return this;
    }
    public setElectric(electric: boolean): CarBuilder {
        this.electric = electric;
        return this;
    }

    public build(): Car {
        return new Car(
            this.engine,
            this.color,
            this.tires,
            this.sound,
            this.gps,
            this.headlights,
            this.sunroof,
            this.reverseCamera,
            this.electric
        );
    }
}