import {Component, Input, OnInit} from '@angular/core';
import {INavItem} from "../../models";

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})

export class NavigationMenuComponent implements OnInit {

  public routes: INavItem[] = [];
  @Input() parentUrl? : string;
  public brandVisible: boolean = false;
  public visibleoffset: number = 350;

  constructor() {
  }

  ngOnInit(): void {
    this.routes.push({title: "Accueil", url: 'home'});
    this.routes.push({title: "Horaire", url: 'horaire'});
    this.routes.push({title: "À propos", url: 'a-propos'});
    this.routes.push({title: "Contact", url: 'contact'});
    this.routes.push({
      title: "", isVisible: true, url: 'auth', icon: "fa-solid fa-user", children: [
        {title: "Se connecter", isVisible: true, url: "login"},
        {title: "S'inscrire", isVisible: true, url: "register"}
      ]
    });
    this.routes.push({
      title: "Mon compte", url: 'account', isVisible: true, children: [
        {title: "Profil", isVisible: true, url: "profil"}
      ]
    });
  }
}
