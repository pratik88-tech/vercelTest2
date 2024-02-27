import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  // private URL="https://vercel-express-8de2.vercel.app/";
  private URL = "https://note-api-jet.vercel.app/notes/";
  headers: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.URL)
  }
}
