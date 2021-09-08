import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://api.tvmaze.com/search/shows';

  constructor(private httpClient:HttpClient) { }

  public async getinfoMovie(genre) {
    const data: any = await this.httpClient.get(this.apiUrl + `?q=${genre}`).toPromise();    
    return data;
  }
  
}
