import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpenAiService } from 'src/app/shared/services/open-ai.service';

interface Mensagem {
  conteudoMensagem: string;
  chatBot: boolean;
}

@Component({
  selector: 'app-reserva-chat',
  templateUrl: './reserva-chat.component.html',
  styleUrls: ['./reserva-chat.component.scss'],
})
export class ReservaChatComponent {


  
}