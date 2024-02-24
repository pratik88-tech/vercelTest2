import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPost:any=[]
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(res=>{
      this.allPost=res
      // console.log(res)
    })
  }
  title = 'vercelTest2';
}
