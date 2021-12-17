import {Component, OnInit} from '@angular/core';
import {IDemandeDevisForm} from "../../../../../models/forms";
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {FormConverters} from "../../../../../handlers/form-converters";
import {CustomHelpers} from "../../../../../handlers/custom-helpers";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../../services/api";
import {IMensurationModel, IServiceModel} from "../../../../../models";
import {ServiceService} from "../../../../../services/api/service.service";

@Component({
  selector: 'app-demandes-devis-create',
  templateUrl: './demandes-devis-create.component.html',
  styleUrls: ['./demandes-devis-create.component.scss']
})
export class DemandesDevisCreateComponent implements OnInit {
  public fg!: FormGroup;
  public form!: IDemandeDevisForm;
  public submitted: boolean = false;

  public services: IServiceModel[] = [];
  public mensurations: IMensurationModel[] = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.loadServices();
    this.loadMensurations();
    this._initForm();
  }

  public submit(): void {
    this.submitted = true;
    if (!this.fg.valid) throw new Error("Le fomulaire n'est pas valide !");
    this.form = FormConverters.convertToDemandeDevis(this.fg);
    console.log(this.form);
  }

  public formStatus(error: ValidationErrors, submitted: boolean): string {
    return CustomHelpers.handleStatus(error, submitted);
  }

  public formControl(field: string, validation: string | null = null) {
    return CustomHelpers.handleFormError(field, this.fg, validation);
  }

  public loadServices(): void {
    this._serviceService.getAll().subscribe({
      next: values => {
        this.services = values
      },
      error: err => console.error(err)
    })
  }

  public loadMensurations(): void {
    this._userService.getMensurationsAll().subscribe({
      next: values => {
        this.mensurations = values
      },
      error: err => console.error(err)
    })
  }

  private _initForm() {
    this.fg = this._formBuilder.group({
      titre: [null, [Validators.required, Validators.maxLength(80)]],
      remarque: [null, null],
      mensurationId: [null, null],
      serviceId: [null, [Validators.required]],
      estUrgent: [null, null]
    })
  }
}
