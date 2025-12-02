import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-machine-test-level2',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf,NgFor],
  templateUrl: './reactive-forms-machine-test-level2.component.html',
  styleUrl: './reactive-forms-machine-test-level2.component.css'
})
export class ReactiveFormsMachineTestLevel2Component {

  // to create this structure
  // employeeForm = {
  //   basicDetails: {
  //     name: '',
  //     address: ''
  //   },
  //   contactDetails: {
  //     email: '',
  //     phone: ''
  //   }
  // }

//    employeeForm = {
//   basicDetails: { name, address },
//   contactDetails: { email, phone },
//   skills: [
//      { skillName, experience },
//      { skillName, experience },
//      ...
//   ]
// }

  employeeForm = new FormGroup({
    basicDetails: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]), //Validators.required),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    }),
    contactDetails: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    }),
    skills: new FormArray([])
  });


  submit(){
    alert(JSON.stringify(this.employeeForm.value))
    console.log(this.employeeForm.value)

  }

  get SkillsArray(){
   return this.employeeForm.get('skills') as FormArray
  }

  addSkills(){
   const skillsGroup  = new FormGroup({
    skillName: new FormControl(''),
    experince :new FormControl('')
   })

   this.SkillsArray.push(skillsGroup)
  }

  removeSkill(index:number){
    this.SkillsArray.removeAt(index)

  }

}
