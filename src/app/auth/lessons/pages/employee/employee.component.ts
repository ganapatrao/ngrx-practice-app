import { JsonPipe, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, NgForOf,JsonPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employee: any = {
    employeeId: 0,
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfJoining: '',
    employeeType: '',
    salary: 0,
    departmentId: '', // ✅ REQUIRED
    designationId: '', // ✅ REQUIRED
  };

  submit(employeeForm: any) {
    console.log(employeeForm.value);
  }

  http = inject(HttpClient);
  departMentLis = signal<any[]>([]);
  designationList = signal<any[]>([]);
  employeeList = signal<any[]>([]);
  iseditMode = signal<boolean>(false);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDepartments();
    this.loadEmployee();
  }

  getDepartments() {
    this.http
      .get('http://localhost:5000/api/employee/GetDepartments')
      .subscribe((data: any) => {
        this.departMentLis.set(data);
      });
  }

  getDesignationByDepartment() {
    this.http
      .get(
        'http://localhost:5000/api/employee/getDesignationsByDeptId?deptId=' +
          this.employee.departmentId
      )
      .subscribe((data: any) => {
        this.designationList.set(data);
      });
  }

  save() {
    if (this.iseditMode()) {
      this.updateEmployee();
    } else {
      this.createEmployee();
    }
  }

  createEmployee() {
        this.http
      .post('http://localhost:5000/api/employee/CreateEmployee', this.employee)
      .subscribe((data) => {
        console.log(data);
        this.loadEmployee();
        this.resetForm();
      });
    
  }





  updateEmployee(){
            this.http
      .put('http://localhost:5000/api/employee/UpdateEmployee', this.employee)
      .subscribe((data) => {
        console.log(data);
        this.loadEmployee();
        this.resetForm();
      });

  }


  loadEmployee() {
    this.http
      .get<any[]>('http://localhost:5000/api/employee/GetEmployees')
      .subscribe((data) => {
        this.employeeList.set(data);
      });
  }


  edit(employee: any) {
    this.iseditMode.set(true);
    this.employee = { ...employee };
    console.log(this.employee);
    this.getDesignationByDepartment();
  }

  addEmployee() {
    this.resetForm()
  }


  resetForm() {    
    this.iseditMode.set(false);
 this.employee = {
    employeeId: 0,
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfJoining: '',
    employeeType: '',
    salary: 0,
    departmentId: '', // ✅ REQUIRED
    designationId: '', // ✅ REQUIRED
  };

   this.designationList.set([]);
   this.iseditMode.set(false);
}


}
