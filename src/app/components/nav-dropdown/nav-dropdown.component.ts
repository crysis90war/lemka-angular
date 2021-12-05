import { Component, Input, OnInit } from '@angular/core';
import { INavItem } from 'src/app/models';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss'],
})
export class NavDropdownComponent implements OnInit {
  @Input() navItem!: INavItem;

  constructor() {}

  ngOnInit(): void {}
}
