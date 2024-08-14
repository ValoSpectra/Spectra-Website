import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../components/navBar/navBar.component';
import { ContentBlockComponent } from '../../components/contentBlock/contentBlock.component';
import { FooterBarComponent } from '../../components/footerBar/footerBar.component';

@Component({
  selector: 'page-MainPage',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ContentBlockComponent, FooterBarComponent],
  templateUrl: './mainPage.component.html',
  styleUrl: './mainPage.component.scss'
})
export class MainPageComponent {
  title = 'spectra-website';
}
