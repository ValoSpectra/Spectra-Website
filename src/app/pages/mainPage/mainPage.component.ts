import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../components/navBar/navBar.component';
import { ContentBlockComponent } from '../../components/contentBlock/contentBlock.component';
import { FooterBarComponent } from '../../components/footerBar/footerBar.component';
import { CoverComponent } from '../../components/coverComponent/coverComponent.component';
import { ContentHeroComponent } from '../../components/content-hero/content-hero.component';
import { ContentDividerComponent } from '../../components/content-divider/content-divider.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { IconFeaturesComponent } from '../../components/icon-features/icon-features.component';

@Component({
  selector: 'page-MainPage',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ContentBlockComponent, FooterBarComponent, CoverComponent, ContentHeroComponent, ContentDividerComponent, FeaturesComponent, CommonModule, IconFeaturesComponent],
  templateUrl: './mainPage.component.html',
  styleUrl: './mainPage.component.scss',
  animations: [ 
    trigger('navFade', [
      transition(':enter',
        [style({ 'opacity': '0' }),
        animate(250, style({ 'opacity': 1 }))]
      ),
      transition(':leave',
        [style({ 'opacity': '1' }),
        animate(250, style({ 'opacity': 0 }))]
      )
    ])
  ]
})
export class MainPageComponent {
  title = 'spectra-website';

  scrolled = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const numb = window.scrollY;
    if (numb >= 125){
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }
}
