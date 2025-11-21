import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-debounce-example',
  standalone: true,
  imports: [NgFor],
  templateUrl: './debounce-example.component.html',
  styleUrl: './debounce-example.component.css'
})
export class DebounceExampleComponent implements OnInit {

  debounceTimer: any;
  
  records:any[] = [];
  data = [
    { name:'angular', version:'15' },
    { name:'react', version:'18' },
    { name:'vue', version:'3' },
    { name:'angular', version:'16' }
  ];

  ngOnInit(): void {
    this.records = [...this.data];  // ✔ No more error
  }


  resetsearch(){
    this.records = [...this.data];
    clearTimeout(this.debounceTimer);
  }

    onsearch(event:any){
  
    clearTimeout(this.debounceTimer);

   this.debounceTimer=setTimeout(() => {
      console.log(event.target.value);
    this.records=this.data.filter(rec=>rec.name.includes(event.target.value))
   }, 2000);
  } 
}





