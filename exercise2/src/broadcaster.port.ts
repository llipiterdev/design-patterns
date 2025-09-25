import { Notification } from "./Notification";

export interface BroadcasterPort {
    broadcast(notification: Notification): void;
}