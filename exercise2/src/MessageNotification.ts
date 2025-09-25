import { Notification } from "./Notification";

export class MessageNotification extends Notification {
    show(): void {
        this.broadcaster.broadcast(this);
    }
}