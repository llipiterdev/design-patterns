import { Notification } from "./Notification";

export class AlertNotification extends Notification {
    show(): void {
        this.broadcaster.broadcast(this);
    }
}