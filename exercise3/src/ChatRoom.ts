
import { Mediator } from "./Mediator";
import { User } from "./User";

// En este caso se podría considerar que el ChatRoom es el Mediador
export class ChatRoom implements Mediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(message, sender.getName());
      }
    }
  }
}
