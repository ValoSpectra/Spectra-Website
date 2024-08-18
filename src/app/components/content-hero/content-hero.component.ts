import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-contentHero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-hero.component.html',
  styleUrl: './content-hero.component.scss'
})
export class ContentHeroComponent {

  @Input() title!: string;
  @Input() content!: string;
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;
  @Input() imagePos: "left" | "right" = "right";
  @Input() button1Text?: string;
  @Input() button1Href?: string;
  @Input() button1Target: "_self" | "_blank" = "_self";
  @Input() button2Text?: string;
  @Input() button2Href?: string;
  @Input() button2Target: "_self" | "_blank" = "_self";

}
