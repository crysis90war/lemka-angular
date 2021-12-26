import { Component, OnInit } from '@angular/core';
import { IEntrepriseModel } from 'src/app/core/models';
import entrepriseJson from '../../_files/entreprise.json';

//  ../../../_files/entreprise.json

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public entreprise!: IEntrepriseModel;

  constructor() {}

  ngOnInit(): void {
    this.entreprise = entrepriseJson;
  }
}
