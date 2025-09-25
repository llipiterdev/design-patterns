import { BroadcasterPort } from "./broadcaster.port";

export abstract class Notification {
    protected broadcaster: BroadcasterPort;

    constructor(broadcaster: BroadcasterPort) {
        this.broadcaster = broadcaster;
    }

    abstract show(): void;

}