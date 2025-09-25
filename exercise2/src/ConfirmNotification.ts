import { Notification } from "./Notification";

export class ConfirmNotification extends Notification {
    show(): void {
        this.broadcaster.broadcast(this);
    }
}