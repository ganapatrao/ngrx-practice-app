import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian-basic',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './accordian-basic.component.html',
  styleUrl: './accordian-basic.component.css'
})
export class AccordianBasicComponent {
selectedIndex = -1

selectedItem(index:number){
 if(this.selectedIndex === index) {
  this.selectedIndex=-1
  return
 }
 this.selectedIndex = index

}

   studentsrecords =[{name:'rock',age:22,grade:'B'},
    {name:'jack',age:25,grade:'B'},
    {name:'John',age:21,grade:'A'},{
      name:'Jane',age:15,grade:'B'}]

}
