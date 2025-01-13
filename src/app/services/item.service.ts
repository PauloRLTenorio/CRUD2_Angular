import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly apiUrl = 'http://127.0.0.1:8000/api/items'; // URL do backend Laravel

  constructor(private readonly http: HttpClient) {}

  // Método para listar todos os itens
  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para obter um item específico
  getItemById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para criar um novo item
  createItem(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // Método para atualizar um item
  updateItem(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Método para deletar um item
  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}