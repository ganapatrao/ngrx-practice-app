import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterState } from '../counter.state';
import { Store } from '@ngrx/store';
import { customInput } from '../counter.action';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  name :string = ''


  constructor(private store: Store<{count:CounterState}>) { }

  increment(){
    this.store.dispatch(customInput({value:+this.name}))  
  }

}
