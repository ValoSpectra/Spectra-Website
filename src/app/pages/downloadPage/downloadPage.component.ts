import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/navBar/navBar.component';
import { FooterBarComponent } from '../../components/footerBar/footerBar.component';

@Component({
  selector: 'page-DownloadPage',
  standalone: true,
  imports: [NavBarComponent, FooterBarComponent],
  templateUrl: './downloadPage.component.html',
  styleUrl: './downloadPage.component.scss',
})
export class DownloadPageComponent {}
