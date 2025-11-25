import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
http = inject(HttpClient)
  ngOnInit(): void {
       this.http.get('/api/test').subscribe((data) => console.log(data));
    
  }

  userdata ={
    name:""
  }


submitForm(){
  console.log(this.userdata)
}


onsend(data:NgForm){
  console.log(data)

}

}
