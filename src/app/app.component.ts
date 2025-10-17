import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-mastery-project';
}
