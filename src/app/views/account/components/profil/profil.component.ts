import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUtilisateurModel } from 'src/app/models';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit, OnDestroy {
  private $sub!: Subscription;
  public utilisateur!: IUtilisateurModel;

  public get fullName(): string {
    if (this.utilisateur?.prenom && this.utilisateur.nom)
      return `${this.utilisateur.prenom} ${this.utilisateur.nom}`;
    return 'Prénom Nom';
  }

  constructor(private _utilisateurService: UserService) {}

  ngOnInit(): void {
    this.chargerUtilisateur();
  }

  ngOnDestroy(): void {
    this.$sub.unsubscribe();
  }

  private chargerUtilisateur(): void {
    this.$sub = this._utilisateurService.getProfil().subscribe({
      next: (v) => {
        this.$sub = this._utilisateurService
          .utilisateurSubject()
          .subscribe((u) => {
            if (u !== null) {
              this.utilisateur = u;
            }
          });
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}
