import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'https://randomuser.me/api';

  constructor(private httpClient:HttpClient) { }

  public async getInfoUser() {
    const data: any = await this.httpClient.get(this.apiUrl).toPromise();
    return data.results;
  }

}
