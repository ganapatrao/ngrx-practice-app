import { Component, Input } from '@angular/core';
import { CounterValueComponent } from './counter-value/counter-value.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterValueComponent, CounterButtonComponent],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

 counter: number = 0;


   incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }
        
  resetCounter() {
    this.counter = 0;
  }

}

