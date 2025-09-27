import { Mediator } from "./Mediator";

export class User {
  private name: string;
  private mediator: Mediator;

  constructor(name: string, mediator: Mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  getName(): string {
    return this.name;
  }

  send(message: string): void {
    console.log(`[${this.name}] envía: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, sender: string): void {
    console.log(`[${this.name}] recibe de ${sender}: ${message}`);
  }
}
