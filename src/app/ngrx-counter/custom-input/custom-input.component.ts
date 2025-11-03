import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterState } from '../counter.state';
import { Store } from '@ngrx/store';
import { customInput,toggle } from '../counter.action';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getToggle } from '../counter.selector';


@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  name :string = ''

  showinput$!: Observable<boolean>;




  constructor(private store: Store<{count:CounterState}>) { 
    // this.showinput$ = this.store.select(state => state.count.toggle).pipe(tap(val => console.log("custom input")));
    //with selector
    this.showinput$ = this.store.select(getToggle)
  }

  //ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.store.select((state) => state.count.toggle).subscribe((val) => {
    //   this.showinput = val;
    // });
    //this.$showinput  = this.store.select((state) => state.count.toggle);
  //}

  increment(){
    this.store.dispatch(customInput({value:+this.name}))  
  }

  onToggle(){
    this.store.dispatch(toggle());
    //this.showinput = !this.showinput
  }
}
