import { Component, OnInit } from '@angular/core';

interface ICountry {
  name: string;
  code: string;
  inactive: boolean;
}

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss'],
})
export class Demo01Component implements OnInit {
  public countries: ICountry[];
  public selectedCountry!: ICountry;

  constructor() {
    this.countries = [
      { name: 'Belgium', code: 'BE', inactive: false },
      { name: 'Germany', code: 'DE', inactive: false },
      { name: 'Russia', code: 'RU', inactive: true },
      { name: 'France', code: 'FR', inactive: false },
    ];
  }

  ngOnInit(): void {}
}
