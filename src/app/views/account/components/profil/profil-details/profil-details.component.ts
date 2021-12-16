import { Component, OnInit } from '@angular/core';
import {IUtilisateurModel} from "../../../../../models";
import {UserService} from "../../../../../services/api";

@Component({
  selector: 'app-profil-details',
  templateUrl: './profil-details.component.html',
  styleUrls: ['./profil-details.component.scss']
})
export class ProfilDetailsComponent implements OnInit {
  public utilisateur!: IUtilisateurModel | null;

  public get fullName(): string {
    if (this.utilisateur?.prenom && this.utilisateur?.nom)
      return `${this.utilisateur.prenom} ${this.utilisateur.nom}`;
    return 'Prénom Nom';
  }

  constructor(private _utilisateurService: UserService) {}

  ngOnInit(): void {
    this._utilisateurService.getUserProfil().subscribe({
      next: (utilisateur: IUtilisateurModel) => {
        this.utilisateur = utilisateur;
      },
      error: (e) => console.error(e),
    });
  }

  ngOnDestroy(): void {
    this.utilisateur = null;
  }
}
