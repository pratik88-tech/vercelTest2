import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  myForm!:FormGroup;
constructor(private testService:TestService){}
ngOnInit(): void {
  this.myForm=new FormGroup(
    {
      title:new FormControl(null),
      description:new FormControl(null),
      image:new FormControl(null) 
    }
  )
}
onFormSubmitted(){
  // console.log(this.myForm.value)
  this.testService.postFile(this.myForm.value,this.myForm.value.image).subscribe(res=>{
    console.log(res)
  });
}
onImagePicked(event: Event) {
  console.log(event)
  const file = (event.target as HTMLInputElement).files[0]; // Here we use only the first file (single file)
  this.myForm.patchValue({ image: file});
  console.log(this.myForm.value)
}
}
