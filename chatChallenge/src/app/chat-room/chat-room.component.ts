import { Component } from '@angular/core';
import { ChatComponent } from "../chat/chat.component";

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export class ChatRoomComponent {

  nombre1: string = "Pepe";
  nombre2: string = "Pepa";
  
  listaMensajes: string[] = [];

  actualizarMensajes(mensaje: any) {
    this.listaMensajes.push(mensaje);
  
    console.log("MENSAJES", this.listaMensajes)
  }



}
