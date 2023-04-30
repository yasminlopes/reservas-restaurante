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
  public mensagens: Mensagem[] = [];

  constructor(private fb: FormBuilder, private openAiService: OpenAiService) {}

  ngOnInit(): void {
    this.iniciarForm()
    this.mensagemInicial()
  }

  private iniciarForm(){
    this.chatForm = this.fb.group({
      mensagem: ['', Validators.required],
    });
  }

  public async enviarMensagem(): Promise<void> {
    const conteudoMensagemUsuario = this.chatForm.controls['mensagem'].value;
    this.adicionarMsgAoHistorico(conteudoMensagemUsuario, false)

    const chatBotMsg = await this.openAiService.enviarMensagem(conteudoMensagemUsuario)
    this.adicionarMsgAoHistorico(chatBotMsg, true)

    this.limparCampoMsg()
  }

  private adicionarMsgAoHistorico(conteudoMensagem: string, chatBot: boolean): void {
    this.mensagens.push({ conteudoMensagem, chatBot })
  }

  private limparCampoMsg(): void {
    this.chatForm.controls['message'].setValue('')
  }  

  private chatBotMsg(conteudoMensagem: string): void {
    this.mensagens.push({ conteudoMensagem, chatBot: true })
  }

  private async mensagemInicial() {
    await this.chatBotMsg('Olá! Sou o assistente virtual do Code & Cook e ficarei feliz em ajudá-lo a fazer sua reserva.')
    
    const delay = 2000
    await new Promise(resolve => setTimeout(resolve, delay))
    
    await this.chatBotMsg('Para que possa personalizar minha assistência, posso saber seu nome, por favor?')
  }
  
  
}