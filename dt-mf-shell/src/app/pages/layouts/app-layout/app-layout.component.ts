import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/core/models/session/menu';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  public opened = true;
  public smallScreen: boolean = window.innerWidth < 600 ? true : false;
  public menu: MenuItem[] = [
    {
      state: 'angular',
      icon: 'home',
      name: 'Angular',
      iconType: 'icon',
      order: 1
    },
    {
      state: 'react',
      icon: 'psychology',
      name: 'React',
      iconType: 'icon',
      order: 1
    },
    {
      state: 'vue',
      icon: 'language',
      name: 'Vue',
      iconType: 'icon',
      order: 1
    }
  ];
  currentRoute!: string;
  routeSubscription!: Subscription;

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // #region HOOK FUNCTIONS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(public router: Router) {}

  ngOnInit(): void {
    if (this.smallScreen) {
      this.opened = false;
    } else {
      this.opened = true;
    }

    this.currentRoute = this.router.routerState.snapshot.url;
    this.routeSubscription = this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = this.router.routerState.snapshot.url;
        }
      }
    );
  }
  // #endregion ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  toggle() {
    this.opened = !this.opened;
  }


  goToLink(ev: any) {
    this.router.navigate([ev]);
  }
}
