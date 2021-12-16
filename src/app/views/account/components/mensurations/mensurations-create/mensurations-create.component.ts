import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {IMensurationForm} from "../../../../../models/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../../services/api";

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
    this.form = this._formBuilder.group({
      titre: [null, [Validators.required, Validators.maxLength(128)]],
      description: [null, null],
      isMain: [null, null]
    })
  }

  submit() {
    this.submitted = true;
    if (!this.form.valid) throw new Error("Le fomulaire n'est pas valide !");
    this.mensuration = this.convertToMensuration(this.form);
    this._userService.createMensuration(this.mensuration).subscribe({
      next: () => {
        this._router.navigate(['../list'], { relativeTo: this._route });
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
      return this.form.controls[field].errors[validation];
    } else {
      return this.form.controls[field].errors
    }
  }
}
