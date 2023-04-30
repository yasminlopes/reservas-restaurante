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

  public chatForm: FormGroup;
    private fb: FormBuilder,
  ngOnInit(): void {
    this.iniciarForm()
  }

  private iniciarForm(){
    this.chatForm = this.fb.group({
      mensagem: ['', Validators.required],
    });
  }

  private adicionarMsgAoHistorico(conteudoMensagem: string, chatBot: boolean): void {
    this.mensagens.push({ conteudoMensagem, chatBot })
  }

  private limparCampoMsg(): void {
    this.chatForm.controls['message'].setValue('')
  }  
  
}