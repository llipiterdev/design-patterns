import { User } from "./User";

export interface Mediator {
  sendMessage(message: string, sender: User): void;
}
