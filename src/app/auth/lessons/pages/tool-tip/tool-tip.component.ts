import { NgIf } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { CustomToolTipDirective } from './custom-tool-tip.directive';
import { HighlighterDirective } from './highlighter.directive';


@Component({
  selector: 'app-tool-tip',
  standalone: true,
  imports: [NgIf,CustomToolTipDirective,HighlighterDirective],
  templateUrl: './tool-tip.component.html',
  styleUrl: './tool-tip.component.css'
})
export class ToolTipComponent {

  isHovered :boolean = false







}
