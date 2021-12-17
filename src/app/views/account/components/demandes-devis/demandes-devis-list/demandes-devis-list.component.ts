import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../services/api";
import {IDemandeDevisModel} from "../../../../../models";

@Component({
  selector: 'app-demandes-devis-list',
  templateUrl: './demandes-devis-list.component.html',
  styleUrls: ['./demandes-devis-list.component.scss']
})
export class DemandesDevisListComponent implements OnInit {

  public datas: IDemandeDevisModel[] = [];

  public enCoursFields = [
    {key: 'createdAt', label: 'Créé le'},
    {key: 'numero', label: 'Numero'},
    {key: 'titre', label: 'Titre'},
  ];

  public enTraitemenntFields = [
    {key: 'submittedAt', label: 'Envoyé le'},
    ...this.enCoursFields
  ]

  public get demandesEnCours(): IDemandeDevisModel[] {
    return this.datas.filter(this._enCours);
  }

  public get demandesEnTraitement(): IDemandeDevisModel[] {
    return this.datas.filter(this._enTraitement);
  }

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

  private _enCours(element: IDemandeDevisModel, index, array) {
    return (element.submittedAt === null);
  }

  private _enTraitement(element:IDemandeDevisModel, index, arr) {
    return (element.devisStatut === false)
  }
}
