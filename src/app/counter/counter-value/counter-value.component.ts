import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-value',
  standalone: true,
  imports: [],
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.css'
})
export class CounterValueComponent {


  @Input() count!: number;

}
