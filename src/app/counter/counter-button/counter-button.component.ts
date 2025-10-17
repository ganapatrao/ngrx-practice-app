import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {

@Output() counterIncremented: EventEmitter<void> = new EventEmitter<void>();
@Output() counterDecremented: EventEmitter<void> = new EventEmitter<void>();
@Output() counterReset: EventEmitter<void> = new EventEmitter<void>();


  increment() {
    this.counterIncremented.emit();
   // console.log('Counter incremented to:', this.counter);
  }


  decrement() {
  this.counterDecremented.emit();
  }


  reset() {
    this.counterReset.emit();
  }

}
