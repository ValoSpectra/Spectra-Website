import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../components/navBar/navBar.component';
import { ContentBlockComponent } from '../../components/contentBlock/contentBlock.component';
import { FooterBarComponent } from '../../components/footerBar/footerBar.component';
import { ContentDividerComponent } from '../../components/content-divider/content-divider.component';
import { ContentHeroComponent } from '../../components/content-hero/content-hero.component';
import { TitleFeaturesComponent } from '../../components/title-features/title-features.component';

@Component({
  selector: 'page-LiveDemoPage',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ContentBlockComponent, FooterBarComponent, ContentDividerComponent, ContentHeroComponent, TitleFeaturesComponent],
  templateUrl: './liveDemoPage.component.html',
  styleUrl: './liveDemoPage.component.scss'
})
export class LiveDemoPageComponent {
  
}
