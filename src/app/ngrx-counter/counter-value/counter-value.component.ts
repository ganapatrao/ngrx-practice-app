import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-value',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.css'
})
export class CounterValueComponent {
  // Observable that emits the current counter value from the store
  counter$: Observable<number>;

  constructor(private store: Store<{ count: { counter: number } }>) {
    // select the counter value from the 'count' slice registered in provideStore
    this.counter$ = this.store.select((state) => state.count.counter);
  }

}
