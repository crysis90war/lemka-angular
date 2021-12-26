import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INavItem } from 'src/app/core/models';
import { IToken } from 'src/app/core/models/itoken';
import { AuthService } from 'src/app/core/services/api';
import navigationsJson from '../../_files/navigations.json';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit, OnDestroy {
  private $sub!: Subscription;

  public routes: INavItem[] = [];
  public authRoute!: INavItem;
  public accountRoute!: INavItem;
  public token: IToken | null = null;
  public get isConnected(): boolean {
    return !!this.token;
  }

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.loadNavBar();
    this.authRoute = navigationsJson.filter((obj) => obj.title === '')[0];
    this.accountRoute = navigationsJson.filter(
      (obj) => obj.title === 'Mon compte'
    )[0];

    this.$sub = this._authService
      .tokenSubject()
      .subscribe((d) => (this.token = d));
  }

  ngOnDestroy(): void {
    this.$sub.unsubscribe();
  }

  public logOut(): void {
    this._authService.logOut();
  }

  private loadNavBar(): void {
    for (let index = 0; index < navigationsJson.length; index++) {
      const element = navigationsJson[index];
      if (element.title === '') continue;
      else if (element.title === 'Mon compte') continue;
      else this.routes.push(element);
    }
  }
}
