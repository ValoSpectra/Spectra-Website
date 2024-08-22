import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/navBar/navBar.component';
import { ContentBlockComponent } from './components/contentBlock/contentBlock.component';
import { FooterBarComponent } from './components/footerBar/footerBar.component';
import { MetaService } from './services/meta.service';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ContentBlockComponent, FooterBarComponent],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private metaService: MetaService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: any) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route: any) => route.outlet === 'primary'),
      mergeMap((route: any) => route.data)
    )
      .subscribe((event: any) => {
        this.metaService.updateTitle(event['title']);
        this.metaService.updateDescription(event['description'])
      });
  }

}
