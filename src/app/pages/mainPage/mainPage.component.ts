import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../components/navBar/navBar.component';
import { ContentBlockComponent } from '../../components/contentBlock/contentBlock.component';
import { FooterBarComponent } from '../../components/footerBar/footerBar.component';
import { CoverComponent } from '../../components/coverComponent/coverComponent.component';
import { ContentHeroComponent } from '../../components/content-hero/content-hero.component';
import { ContentDividerComponent } from '../../components/content-divider/content-divider.component';

@Component({
  selector: 'page-MainPage',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ContentBlockComponent, FooterBarComponent, CoverComponent, ContentHeroComponent, ContentDividerComponent],
  templateUrl: './mainPage.component.html',
  styleUrl: './mainPage.component.scss'
})
export class MainPageComponent {
  title = 'spectra-website';
}
