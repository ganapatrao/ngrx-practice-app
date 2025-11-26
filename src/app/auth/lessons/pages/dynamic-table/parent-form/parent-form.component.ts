import { Component, inject } from '@angular/core';
import { DynamicTableComponent } from '../dynamic-table.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent-form',
  standalone: true,
  imports: [DynamicTableComponent],
  templateUrl: './parent-form.component.html',
  styleUrl: './parent-form.component.css',
})
export class ParentFormComponent {
  http = inject(HttpClient);
  userList: any[] = [];

headers = [
  { head: 'User Name', fieldName: 'name' },
  { head: 'User Email', fieldName: 'email' },
  { head: 'Action', fieldName: '' },
];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        console.log(data)
        this.userList = data;
      });
  }
}
