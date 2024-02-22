import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirportService {


  private baseUrl = `/api/v${environment.varsion}`;
  private endpoint: string = `${environment.endpoint}`;
  language : string = `${environment.language}`;
  headers = new HttpHeaders().set('Tenant-Identifier', '9d7d6eeb25cd6083e0df323a0fff258e59398a702fac09131275b6b1911e202d');

  constructor(private http: HttpClient) { }

  getAirports() {
    return this.http.get(`${this.baseUrl}/${this.endpoint}/${this.language}`, {headers: this.headers});
  }
}
