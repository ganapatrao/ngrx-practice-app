import { NgIf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-machine-test',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './reactive-forms-machine-test.component.html',
  styleUrl: './reactive-forms-machine-test.component.css'
})
export class ReactiveFormsMachineTestComponent {


  employeeForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]  ),//Validators.required),
    address: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })



  submit(){
    console.log(this.employeeForm)
    alert(JSON.stringify(this.employeeForm.value))

  }

}
