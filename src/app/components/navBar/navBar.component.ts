import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'comp-NavBar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navBar.component.html',
  styleUrl: './navBar.component.scss'
})
export class NavBarComponent {
    
}
