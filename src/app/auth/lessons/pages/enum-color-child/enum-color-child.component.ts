import { NgStyle } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Color } from '../enum-color/enum-color.component';


@Component({
  selector: 'app-enum-color-child',
  standalone: true,
  imports: [NgStyle,],
  templateUrl: './enum-color-child.component.html',
  styleUrl: './enum-color-child.component.css'
})
export class EnumColorChildComponent {

  @Input() selectedColor!: Color;  

}
