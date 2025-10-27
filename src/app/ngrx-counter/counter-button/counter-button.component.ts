import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter.action';
import { CounterState } from '../counter.state';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {

  // constructor( private store:Store<{ count: {counter:number} }>) { }
  constructor( private store:Store<{ count: CounterState }>) { }
  
  increment() {
  //  this.store.dispatch({ type: '[Counter Component] Increment' });
  this.store.dispatch(increment());
  }

  decrement() {
   // this.store.dispatch({ type: '[Counter Component] Decrement' });
   this.store.dispatch(decrement());
  }

  reset() {
   // this.store.dispatch({ type: '[Counter Component] Reset' });
   this.store.dispatch(reset());
  }

}
