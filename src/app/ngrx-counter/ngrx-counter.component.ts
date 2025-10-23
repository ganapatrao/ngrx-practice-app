import { Component } from '@angular/core';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterValueComponent } from './counter-value/counter-value.component';

@Component({
  selector: 'app-ngrx-counter',
  standalone: true,
  imports: [CounterButtonComponent, CounterValueComponent],
  templateUrl: './ngrx-counter.component.html',
  styleUrl: './ngrx-counter.component.css'
})
export class NgrxCounterComponent {

}
