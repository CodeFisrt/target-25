import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('')
  });
  onSubmit() {
    console.log(this.form.value);
  }
  
}
