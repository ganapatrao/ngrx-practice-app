import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-family',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './reactive-form-family.component.html',
  styleUrl: './reactive-form-family.component.css'
})
export class ReactiveFormFamilyComponent {


  employDetailsForm :FormGroup= new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phoneNumber: new FormControl(""),
    department: new FormControl(""),
    familydetails : new FormArray([])/// form array where a form groupcan be inetted
  })


  constructor() { 
    this.addfamily()
  }

  get getFamilyControl(){
   return this.employDetailsForm.get('familydetails') as FormArray;
  }
  //always create getmethode and then we can push it


  addfamily(){
    const family = new FormGroup({
      membername: new FormControl(""),
      relation: new FormControl(""),
      age: new FormControl("")
    })
    this.getFamilyControl.push(family);
  }  
  
  save(){
    console.log(this.employDetailsForm.value);
  }


}
