import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })

export class CardapioApiService {
  constructor(private http: HttpClient) {}

  listarCardapio(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/cardapio`);
  }
}