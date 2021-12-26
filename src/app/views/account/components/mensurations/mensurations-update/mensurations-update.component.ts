import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {IMensurationForm} from "../../../../../core/models/forms";
import {IMensurationModel} from "../../../../../core/models";
import {UserService} from "../../../../../core/services/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mensurations-update',
  templateUrl: './mensurations-update.component.html',
  styleUrls: ['./mensurations-update.component.scss']
})
export class MensurationsUpdateComponent implements OnInit {

  public fg!: FormGroup;
  public form: IMensurationForm;
  public model: IMensurationModel;
  public submitted: boolean = false;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.model = this._route.snapshot.data['model'];
    this._initForm();
    this._setForm(this.model);
  }

  submit() {
    this.submitted = true;
    if (!this.fg.valid) throw new Error("Le fomulaire n'est pas valide !");
    this.form = this.convertToMensuration(this.fg);
    this._userService.updateMensuration(this.model.id, this.form).subscribe({
      next: () => {
        this._router.navigate(['../../list'], {relativeTo: this._route});
      },
      error: (error) => console.error(error)
    })
  }

  public convertToMensuration(fg: FormGroup): IMensurationForm {
    return {
      titre: fg.controls['titre'].value.trim(),
      description: fg.controls['description'].value ? fg.controls['description'].value.trim() : null,
      isMain: !!fg.controls['isMain'].value
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

  public customControl(field: string, validation: string | null = null) {
    if (validation) {
      return this.fg.controls[field].errors[validation];
    } else {
      return this.fg.controls[field].errors
    }
  }

  private _initForm(): void {
    this.fg = this._formBuilder.group({
      titre: [null, [Validators.required, Validators.maxLength(128)]],
      description: [null, null],
      isMain: [null, null]
    })
  }

  private _setForm(model: IMensurationModel): void {
    this.fg.setValue({
      titre: model.titre,
      description: model.description,
      isMain: model.isMain,
    });
  }
}
