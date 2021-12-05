import { Component, OnInit } from '@angular/core';
import { IEntrepriseModel, ISocial } from 'src/app/models';
import socielsJson from '../../_files/socials.json';
import entrepriseJson from '../../_files/entreprise.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public socials: ISocial[] = [];
  public entreprise!: IEntrepriseModel;
  constructor() {}

  ngOnInit(): void {
    this.socials = socielsJson;
    this.entreprise = entrepriseJson;
  }
}
