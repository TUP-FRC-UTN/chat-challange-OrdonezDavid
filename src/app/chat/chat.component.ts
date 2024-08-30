import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  @Input() nombre: string = "";

  
  @Output() mensaje = new EventEmitter<string>();


  mensajeChat: string = '';  // Esta es la variable vinculada


  enviarMensaje(mesage: string){

    console.log("Mensaje en hijo",mesage)

    this.mensaje.emit(this.nombre + ":"+ mesage);

  }

}
