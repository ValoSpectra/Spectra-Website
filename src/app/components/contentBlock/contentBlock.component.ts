import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'comp-ContentBlock',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './contentBlock.component.html',
  styleUrl: './contentBlock.component.scss'
})
export class ContentBlockComponent {
    
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string;
  @Input() link!: string;
  @Input() target: string = "_self";
  @Input() text!: string;
  @Input({transform: booleanAttribute}) roundImage: boolean = false;

}
