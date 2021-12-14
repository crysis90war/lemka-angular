import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {IAdresseForm, IUtilisateurForm} from "../../../../../models/forms";
import {GenreService, UserService} from "../../../../../services/api";
import {IAdresseModel, IGenreModel, IUtilisateurModel, UtilisateurModel} from "../../../../../models";

@Component({
  selector: 'app-profil-test-update',
  templateUrl: './profil-update.component.html',
  styleUrls: ['./profil-update.component.scss']
})

export class ProfilUpdateComponent implements OnInit {

  public genres: IGenreModel[] = [];

  public form!: FormGroup;

  public adresse!: IAdresseForm;
  public adresseSubmitted: boolean = false;

  public get adresseForm(): FormGroup {
    return this.form.controls['adresse'] as FormGroup;
  }

  public utilisateur!: IUtilisateurForm;
  public utilisateurSubmitted: boolean = false;

  public get utilisateurForm(): FormGroup {
    return this.form.controls['utilisateur'] as FormGroup;
  }

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _genreService: GenreService
  ) {
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      adresse: this._formBuilder.group({
        pays: [null, [Validators.required, Validators.maxLength(50)]],
        ville: [null, [Validators.required, Validators.maxLength(50)]],
        codePostal: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
        rue: [null, [Validators.required, Validators.maxLength(50)]],
        numero: [null, [Validators.required, Validators.maxLength(10)]],
        boite: [null, null],
      }),
      utilisateur: this._formBuilder.group({
        username: [null, [Validators.required, Validators.maxLength(20)]],
        tel: [null, [Validators.maxLength(20)]],
        prenom: [null, [Validators.maxLength(50)]],
        nom: [null, [Validators.maxLength(50)]],
        genreId: [null, null]
      })
    });

    this._genreService.getAll().subscribe({
      next: (res) => {
        this.genres = res;
      },
      error: (error) => console.error(error),
    });

    this._userService.getUserProfil().subscribe({
      next: (res) => {
        this.setUtilisateur(res);
        this.setAdresse(res.adresse);
      },
      error: (error) => console.error(error),
    })
  }

  public submitUtilisateur() {
    this.utilisateurSubmitted = true;
    if (!this.utilisateurForm.valid) throw new Error("Le fomulaire n'est pas valide !");
    this.utilisateur = this.convertToUtilisateur(this.utilisateurForm);
    this._userService.updateUserProfil(this.utilisateur).subscribe({
      next: (res) => {
        this.setUtilisateur(res);
        this._router.navigate(['../details'])
      },
      error: (error) => console.error(error)
    })
  }

  public submitAdresse() {
    this.adresseSubmitted = true;
    if (!this.adresseForm.valid) throw new Error("Le fomulaire n'est pas valide !");
    this.adresse = this.convertToAdresse(this.adresseForm);
    console.log(this.adresse);
  }

  public convertToAdresse(fg: FormGroup): IAdresseForm {
    return {
      pays: fg.controls['pays'].value.trim(),
      ville: fg.controls['ville'].value.trim(),
      codePostal: fg.controls['codePostal'].value.trim(),
      rue: fg.controls['rue'].value.trim(),
      numero: fg.controls['numero'].value.trim(),
      boite: fg.controls['boite'].value.trim(),
    };
  }

  public convertToUtilisateur(fg: FormGroup): IUtilisateurForm {
    return {
      username: fg.controls['username'].value.trim(),
      genreId: fg.controls['genreId'].value ? parseInt(fg.controls['genreId'].value) : fg.controls['genreId'].value,
      nom: fg.controls['nom'].value ? fg.controls['nom'].value.trim() : fg.controls['nom'].value,
      prenom: fg.controls['prenom'].value ? fg.controls['prenom'].value.trim() : fg.controls['prenom'].value,
      tel: fg.controls['tel'].value ? fg.controls['tel'].value.trim() : fg.controls['tel'].value,
    }
  }

  public inputStatus(field: string): string {
    if (this.adresseSubmitted && this.adresseForm.controls[field].errors)
      return 'is-invalid';
    if (this.adresseSubmitted && !this.adresseForm.controls[field].errors)
      return 'is-valid';
    else return '';
  }

  public statusInput(error: ValidationErrors, submitted: boolean) {
    if (submitted && error) {
      return 'is-invalid';
    } else if (submitted && !error) {
      return 'is-valid';
    } else {
      return '';
    }
  }

  public adresseControl(field: string, validation: string | null = null) {
    if (validation) {
      return this.adresseForm.controls[field].errors[validation];
    } else {
      return this.adresseForm.controls[field].errors
    }
  }

  public utilisateurControl(field: string, validation: string | null = null) {
    if (validation) {
      return this.utilisateurForm.controls[field].errors[validation];
    } else {
      return this.utilisateurForm.controls[field].errors
    }
  }

  public setUtilisateur(values: UtilisateurModel): void {
    this.utilisateurForm.setValue({
      username: values.username,
      prenom: values.prenom,
      nom: values.nom,
      tel: values.tel,
      genreId: values.genre ? values.genre.id : null
    });
  }

  public setAdresse(values: IAdresseModel | null): void {
    if (values) {
      this.adresseForm.setValue({
        pays: values.pays,
        ville: values.ville,
        codePostal: values.codePostal,
        rue: values.rue,
        numero: values.numero,
        boite: values.boite
      })
    }
  }
}
