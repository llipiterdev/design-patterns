import { BroadcasterPort } from "./broadcaster.port";
import { Notification } from "./Notification";

export class MobileBroadcaster implements BroadcasterPort {
    broadcast(notification: Notification): void {
        console.log("Sending notification via Mobile:", notification);
    }
}