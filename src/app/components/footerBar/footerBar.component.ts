import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'comp-FooterBar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './footerBar.component.html',
  styleUrl: './footerBar.component.scss'
})
export class FooterBarComponent {

}
