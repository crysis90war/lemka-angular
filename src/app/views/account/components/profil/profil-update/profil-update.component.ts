import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IAdresseForm, IUtilisateurForm} from "../../../../../models/forms";
import {GenreService, UserService} from "../../../../../services/api";
import {IAdresseModel, IGenreModel, UtilisateurModel} from "../../../../../models";
import {FormConverters} from "../../../../../handlers/form-converters";
import {CustomHelpers} from "../../../../../handlers/custom-helpers";

@Component({
  selector: 'app-profil-test-update',
  templateUrl: './profil-update.component.html',
  styleUrls: ['./profil-update.component.scss']
})

export class ProfilUpdateComponent implements OnInit {

  public genres: IGenreModel[] = [];
  public adresseExists: boolean = false;

  public fg!: FormGroup;

  public utilisateur!: IUtilisateurForm;
  public utilisateurSubmitted: boolean = false;

  public get utilisateurForm(): FormGroup {
    return this.fg.controls['utilisateur'] as FormGroup;
  }

  public adresse!: IAdresseForm;
  public adresseSubmitted: boolean = false;

  public get adresseForm(): FormGroup {
    return this.fg.controls['adresse'] as FormGroup;
  }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _genreService: GenreService
  ) {
  }

  ngOnInit(): void {
    this._initForm();
    this._loadGenres();

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
    this.utilisateur = FormConverters.convertToUtilisateur(this.utilisateurForm);
    this._userService.updateUserProfil(this.utilisateur).subscribe({
      next: (res) => {
        this.setUtilisateur(res);
        this._backToDetails();
      },
      error: (error) => console.error(error)
    })
  }

  public submitAdresse() {
    this.adresseSubmitted = true;
    if (!this.adresseForm.valid) throw new Error("Le fomulaire n'est pas valide !");
    this.adresse = FormConverters.convertToAdresse(this.adresseForm);
    if (!this.adresseExists) {
      this._userService.createUserAdresse(this.adresse).subscribe({
        next: (res) => {
          this.setAdresse(res);
          this._backToDetails();
        },
        error: (error) => console.error(error)
      })
    } else {
      this._userService.updateUserAdresse(this.adresse).subscribe({
        next: (res) => {
          this.setAdresse(res);
          this._backToDetails();
        },
        error: (error) => console.error(error)
      })
    }
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

  public formStatus(error: ValidationErrors, submitted: boolean): string {
    return CustomHelpers.handleStatus(error, submitted);
  }

  public formControl(field: string, validation: string | null = null) {
    return CustomHelpers.handleFormError(field, this.fg, validation);
  }

  public adresseControl(field: string, validation: string | null = null) {
    return CustomHelpers.handleFormError(field, this.adresseForm, validation);
  }

  public utilisateurControl(field: string, validation: string | null = null) {
    return CustomHelpers.handleFormError(field, this.utilisateurForm, validation);
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
      this.adresseExists = true;
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

  private _initForm(): void {
    this.fg = this._formBuilder.group({
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
  }

  private _loadGenres(): void {
    this._genreService.getAll().subscribe({
      next: (res) => {
        this.genres = res;
      },
      error: (error) => console.error(error),
    });
  }

  private _backToDetails() {
    this._router.navigate(['../details'], { relativeTo: this._route });
  }
}
