import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../components/navBar/navBar.component';
import { ContentBlockComponent } from '../../components/contentBlock/contentBlock.component';
import { FooterBarComponent } from '../../components/footerBar/footerBar.component';

@Component({
  selector: 'page-CreditsPage',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ContentBlockComponent, FooterBarComponent],
  templateUrl: './creditsPage.component.html',
  styleUrl: './creditsPage.component.scss'
})
export class CreditsPageComponent {
  
}
