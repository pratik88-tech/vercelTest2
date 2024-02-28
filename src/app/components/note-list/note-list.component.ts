import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  data: any;
  constructor(private testService: TestService) { }
  ngOnInit(): void {
    this.testService.getData().subscribe(res => {
      this.data = res
      console.log(this.data.notes)
    })
  }
  editNote(item:any){
    console.log(item)
  }
  deleteNote(item:any){
    console.log(item)
  }
}
