import { ChatRoom } from "./ChatRoom";
import { User } from "./User";

const chatRoom = new ChatRoom();

const user1 = new User("Pepito", chatRoom);
const user2 = new User("Juanito", chatRoom);
const user3 = new User("Carlitos", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.send("Hola a todos!");
user2.send("Hola Pepito!");
user3.send("Qué tal?");
user1.send("Muy bien, gracias!");
user2.send("Me alegro de escuchar eso.");
user3.send("Sí, yo también estoy bien.");
user1.send("¿Alguien quiere salir a jugar?");   
user2.send("¡Claro que sí!");
user3.send("¡Cuenta conmigo!");
user1.send("Genial, nos vemos en el parque a las 5.");
user2.send("Perfecto, allí estaré.");
user3.send("Nos vemos entonces. ¡Hasta luego!");
user1.send("¡Hasta luego!");
user2.send("¡Adiós!");
user3.send("¡Chao!");
