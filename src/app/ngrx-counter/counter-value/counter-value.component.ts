import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { CounterState } from '../counter.state';
import { getCounter } from '../counter.selector';

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

  // constructor(private store: Store<{ count: { counter: number } }>) {
    constructor(private store: Store<{ count: CounterState }>) { //2 replace type with the interface

   // this.counter$ = this.store.select((state) => state.count.counter).pipe(tap(val => console.log("counter value", val)));
// with key 
// this.count$ = this.store.select('count');//    
//    <div *ngIf="count$ | async as count">
//   {{ count.counter }}
//   {{ count.toggle }}
// </div>
this.counter$ = this.store.select(getCounter)// this will give us a boolean value
    // or manual way
//#################without selector
// select the counter value from the 'count' slice registered in provideStore
//  this.sub = this.store.select('count').subscribe((state) => {
//       this.count = state.count; // Access property directly
//     });
// in ngondestroy unsubscribe it 
//   provideStore({ count: counterReducer }), in app.config.ts

    //#################### with selector
  //   private sub = this.store.select(selectCount).subscribe((val) => {
  //   this.count = val;
  // });
    
  }

}
