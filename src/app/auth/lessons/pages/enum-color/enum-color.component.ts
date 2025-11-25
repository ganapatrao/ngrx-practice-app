import { Component } from '@angular/core';
import { EnumColorChildComponent } from '../enum-color-child/enum-color-child.component';


export enum Color{
  red ="red",green="green",blue="blue"
}
@Component({
  selector: 'app-enum-color',
  standalone: true,
  imports: [EnumColorChildComponent],
  templateUrl: './enum-color.component.html',
  styleUrl: './enum-color.component.css'
})



export class EnumColorComponent {
colors = Color
selectedColor!: Color


selectColor(colour:Color){
  this.selectedColor =colour
  console.log(colour)

}

}
