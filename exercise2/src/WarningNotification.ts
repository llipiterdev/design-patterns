import { Notification } from "./Notification";

export class WarningNotification extends Notification {
    show(): void {
        this.broadcaster.broadcast(this);
    }
}