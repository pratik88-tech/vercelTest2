import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  // private URL="https://vercel-express-8de2.vercel.app/";
  // private URL = "https://note-api-jet.vercel.app/notes/";
  private URL = "http://localhost:5000/notes/";
  headers: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.URL)
  }
  saveData(payload:any){
    // payload.userId="65db1e545818daabc20e651e";
    // this.headers={ 'enctype': 'multipart/form-data' }
    return this.http.post(this.URL,payload);
  }

  postFile(payload,fileToUpload: File){
    const endpoint = 'http://localhost:5000/notes/';
    const formData: FormData = new FormData();
    formData.append('title',payload.title);
    formData.append('description', payload.description);
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData)

}
}
