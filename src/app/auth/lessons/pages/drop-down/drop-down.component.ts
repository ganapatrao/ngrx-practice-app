import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css'
})
export class DropDownComponent {
  isShowDropDown: boolean =false;
  selectedItem =""

  items =["profile","settings","logout"];


  selectItem(item:string){
    this.selectedItem= item

  }

}
