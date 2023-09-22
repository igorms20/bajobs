import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vaga } from '../Vaga';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  apiUrl: string = 'https://bajobs-project.onrender.com';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Vaga[]> {

    return this.http.get<Vaga[]>(`${this.apiUrl}/vagas`);
  }

  getById(id: number): Observable<Vaga> {
    return this.http.get<Vaga>(`${this.apiUrl}/vagas/${id}`);
  }

  getLocais(): string[] {
    const locais: string[] = [];
    this.getAll().subscribe(vagas => vagas.forEach(vaga => {
      if (!locais.includes(vaga.local)) {
        locais.push(vaga.local)
      }
    }))

    return locais;
  }


}
