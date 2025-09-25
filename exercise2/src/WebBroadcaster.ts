import { BroadcasterPort } from "./broadcaster.port";
import { Notification } from "./Notification";

export class WebBroadcaster implements BroadcasterPort {
    broadcast(notification: Notification): void {
        console.log("Sending notification via Web:", notification);
    }
}