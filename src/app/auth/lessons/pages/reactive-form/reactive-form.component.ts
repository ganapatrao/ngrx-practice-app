import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userformdata = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]  ),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
    }),
  });

  onsubmit() {
    console.log(this.userformdata);
  }


  onUpdate(){
    this.userformdata.patchValue({
      name:"hare krishna",
      address:{
        city:"vasco",
        state:"goa"
      }
    })
  }
}



