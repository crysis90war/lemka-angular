import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../services/api";
import {IDemandeDevisModel} from "../../../../../models";
import {StatutEnum} from "../../../../../models/enums";
import {CustomHelpers} from "../../../../../handlers/custom-helpers";

@Component({
  selector: 'app-demandes-devis-list',
  templateUrl: './demandes-devis-list.component.html',
  styleUrls: ['./demandes-devis-list.component.scss']
})
export class DemandesDevisListComponent implements OnInit {

  public datas: IDemandeDevisModel[] = [];

  public get demandesEnCours(): IDemandeDevisModel[] {
    return this.datas.filter(e => CustomHelpers.statutDemandeDevis(e, StatutEnum.EnCours));
  }

  public get demandesEnvoye(): IDemandeDevisModel[] {
    return this.datas.filter(e => CustomHelpers.statutDemandeDevis(e, StatutEnum.Envoye));
  }

  public get demandesEnTraitement(): IDemandeDevisModel[] {
    return this.datas.filter(e => CustomHelpers.statutDemandeDevis(e, StatutEnum.EnTraitement));
  }

  public get demandesTraite(): IDemandeDevisModel[] {
    return this.datas.filter(e => CustomHelpers.statutDemandeDevis(e, StatutEnum.Traite));
  }

  public get demandesArchive(): IDemandeDevisModel[] {
    return this.datas.filter(e => CustomHelpers.statutDemandeDevis(e, StatutEnum.Archive));
  }

  public enCoursFields = [
    {key: 'createdAt', label: 'Créé le'},
    {key: 'numero', label: 'Numero'},
    {key: 'titre', label: 'Titre'},
  ];

  public enTraitemenntFields = [
    {key: 'submittedAt', label: 'Envoyé le'},
    ...this.enCoursFields
  ]

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this._userService.getAllDemandesDevis().subscribe({
      next: values => {
        this.datas = values;
      },
      error: err => console.error(err)
    })
  }
}
