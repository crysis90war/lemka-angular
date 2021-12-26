import { Component, Input, OnInit } from '@angular/core';
import { INavItem } from 'src/app/core/models';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input() navItem!: INavItem;
  @Input() parentUrl!: string;

  constructor() {}

  ngOnInit(): void {}
}
