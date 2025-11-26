import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, input, OnInit, Output, output } from '@angular/core';


@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [NgForOf, JsonPipe, NgIf],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css'
})
export class DynamicTableComponent {


  http = inject(HttpClient)


  userlist :any[] =[]

  @Input() headers : any[] =[]
  @Input() GridArray : any[] =[]
  @Output() Edit = new EventEmitter<any>()
    @Output() Delete = new EventEmitter<any>()



}
