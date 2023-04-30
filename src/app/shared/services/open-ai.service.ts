import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})

export class OpenAiService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  async enviarMensagem(mensagem: string): Promise<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.OPENAI_API_KEY}`,
    });

    const dadosReq = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: mensagem,
        }
      ],
      temperature: 0.7,
      max_tokens: 64,
    };

    try {
      const resposta = await this.http.post<any>(
        'https://api.openai.com/v1/completions',
        dadosReq,
        { headers }
      ).toPromise();
      const texto = resposta.choices[0].text.trim();
      return texto;
    } catch (erro: any) {
      throw erro;
    }
  }
}
