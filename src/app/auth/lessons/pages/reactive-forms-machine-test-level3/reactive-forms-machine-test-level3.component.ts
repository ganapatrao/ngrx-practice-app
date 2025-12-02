import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-machine-test-level3',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './reactive-forms-machine-test-level3.component.html',
  styleUrl: './reactive-forms-machine-test-level3.component.css',
})
export class ReactiveFormsMachineTestLevel3Component {
  //to create like this
  //   projects = [
  //    {
  //      projectName: 'AI Project',
  //      tasks: [
  //         { taskName: 'UI Design', status: 'Done' },
  //         { taskName: 'API Integration', status: 'Pending' }
  //      ]
  //    },
  //    {
  //      projectName: 'Mobile App',
  //      tasks: [
  //         { taskName: 'Login Page', status: 'Done' }
  //      ]
  //    }
  // ]

  projectForm = new FormGroup({
    projects: new FormArray([]),
  });

  get projects() {
    return this.projectForm.get('projects') as FormArray;
  } //Prjects

  addprojects() {
    const projectDetails = new FormGroup({
      projectName: new FormControl(''),
      tasks: new FormArray([]),
    });

    this.projects.push(projectDetails);
  }

  // since we have array of projects
  addTasks(projectIndex: number) {
    const taskArray =  this.projects.at(projectIndex).get('tasks') as FormArray;
    const taskDetails = new FormGroup({
      taskName: new FormControl(''),
      status: new FormControl(''),
    });
    
    taskArray.push(taskDetails);
  }


getTasks(project: AbstractControl): FormArray {
  return project.get('tasks') as FormArray;
}

  //remove fiunctions
  removeProject(i: number) {
  this.projects.removeAt(i);
}

removeTask(projectIndex: number, taskIndex: number) {
  const tasksArray = this.projects.at(projectIndex).get('tasks') as FormArray;
  tasksArray.removeAt(taskIndex);
}

  
  

  


}
