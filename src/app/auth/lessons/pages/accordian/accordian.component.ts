import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [NgFor],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.css'
})
export class AccordianComponent {
  openedIndex: number | null = null;

 


  accordionData = [
    {
      title: 'What is Angular?',
      content: 'Angular is a framework for building SPA applications.'
    },
    {
      title: 'What is RxJS?',
      content: 'RxJS is used for reactive programming with observables.'
    },
    {
      title: 'What is a Component?',
      content: 'Components are the building blocks of Angular UI.'
    }
  ];


  toggle(index: number) {
    this.openedIndex =  this.openedIndex===index?null:index
   
  }

}
