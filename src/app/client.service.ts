import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientItem } from './store/models/client-item.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private CLIENTS_URL = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  //WARNING : THE DELAY METHOD IS USED IN ORDER TO SIMULATE A REAL CALL, DO NOT USE IT IN PROD

  getItems() {
    return this.http.get<ClientItem[]>(this.CLIENTS_URL).pipe(delay(500));
  }

  addItem(clientItem: ClientItem) {
    return this.http.post(this.CLIENTS_URL, clientItem).pipe(delay(500));
  }

  deleteItem(id: string) {
    return this.http.delete(`${this.CLIENTS_URL}/${id}`).pipe(delay(500));
  }
}
