import { BroadcasterPort } from "./broadcaster.port";
import { Notification } from "./Notification";

export class DesktopBroadcaster implements BroadcasterPort {
    broadcast(notification: Notification): void {
        console.log("Sending notification via Desktop:", notification);
    }
}