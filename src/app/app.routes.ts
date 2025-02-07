import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/mainPage/mainPage.component';
import { CreditsPageComponent } from './pages/creditsPage/creditsPage.component';
import { LiveDemoPageComponent } from './pages/liveDemoPage/liveDemoPage.component';
import { DownloadPageComponent } from './pages/downloadPage/downloadPage.component';
import { title } from 'process';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: {
      title: 'Spectra - Spectating Valorant',
      description:
        'Spectra is your all-in-one solution for an amazing looking Valorant Tournament Overlay, enabling all Organizers to display live game information.',
    },
  },
  {
    path: 'credits',
    component: CreditsPageComponent,
    data: {
      title: 'Spectra - Credits',
      description:
        'Everyone who has contributed to Spectra in one way or another. Developers, Designers, and more.',
    },
  },
  {
    path: 'live-demo',
    component: LiveDemoPageComponent,
    data: {
      title: 'Spectra - Live Demo',
      description:
        'Learn more about the live demo for Spectra - created to test out Spectra functionality in a simple and intuitive way.',
    },
  },
  {
    path: 'download',
    component: DownloadPageComponent,
    data: {
      title: 'Spectra - Client Download',
      description: 'Download the latest version of the Spectra Client here.',
    },
  },
];
