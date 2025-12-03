import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-brushup',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap-brushup.component.html',
  styleUrl: './bootstrap-brushup.component.css'
})
export class BootstrapBrushupComponent {
  

  darkmode: string =""
  darkMode(){
    this.darkmode = this.darkmode == "dark" ? "" : "dark"
  }
}
