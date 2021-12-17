import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {IMensurationForm} from "../../../../../models/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../../services/api";
import {FormConverters} from "../../../../../handlers/form-converters";
import {CustomHelpers} from "../../../../../handlers/custom-helpers";

@Component({
  selector: 'app-mensurations-create',
  templateUrl: './mensurations-create.component.html',
  styleUrls: ['./mensurations-create.component.scss']
})
export class MensurationsCreateComponent implements OnInit {

  public form!: FormGroup;
  public mensuration: IMensurationForm;
  public submitted: boolean = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _userService: UserService) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  submit() {
    this.submitted = true;
    if (!this.form.valid) throw new Error("Le fomulaire n'est pas valide !");
    this.mensuration = FormConverters.convertToMensuration(this.form);
    this._userService.createMensuration(this.mensuration).subscribe({
      next: () => {
        this._router.navigate(['../list'], {relativeTo: this._route});
      },
      error: (error) => console.error(error)
    })
  }

  public statusInput(error: ValidationErrors, submitted: boolean): string {
    return CustomHelpers.handleStatus(error, submitted);
  }

  public customControl(field: string, validation: string | null = null) {
    return CustomHelpers.handleFormError(field, this.form, validation);
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      titre: [null, [Validators.required, Validators.maxLength(128)]],
      description: [null, null],
      isMain: [null, null]
    })
  }
}
