import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // allPost:any=[]
  message:any=null;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get("https://vercel-express-8de2.vercel.app/").subscribe(res=>{
      this.message=res
      // console.log(res)
    })
  }
  title = 'vercelTest2';
}
