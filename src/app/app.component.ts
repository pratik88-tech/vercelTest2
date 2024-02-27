import { Component } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any=null;
  constructor(private testService:TestService){}
  ngOnInit(): void {
    this.testService.getData().subscribe(res=>{
      this.data=res
    })
  }
}
