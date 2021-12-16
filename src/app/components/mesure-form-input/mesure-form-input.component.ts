import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {IMesureModel} from "../../models/imesure-model";
import {IMesureForm} from "../../models/forms/imesure-form";
import {UserService} from "../../services/api";

@Component({
  selector: 'app-mesure-form-input',
  templateUrl: './mesure-form-input.component.html',
  styleUrls: ['./mesure-form-input.component.scss']
})
export class MesureFormInputComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() mesureModel!: IMesureModel;

  @Input() index: number;
  @Input() mensurationId: number;

  public mesureForm!: IMesureForm;
  public submitted: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _userService: UserService) {
  }

  ngOnInit(): void {
    this._initForm();
    this._setMesure(this.mesureModel);
  }

  submit(): void {
    this.submitted = true;
    if (!this.form.valid) throw new Error("Le fomulaire n'est pas valide !");
    this.mesureForm = this._convertToMesure(this.form);
    this._userService.updateMesure(this.mensurationId, this.mesureModel.id, this.mesureForm).subscribe({
      next: value => {
        console.log(value)
      },
      error: err => console.error(err)
    })
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

  public fieldControl(field: string, validation: string | null = null) {
    if (validation) {
      return this.form.controls[field].errors[validation];
    } else {
      return this.form.controls[field].errors
    }
  }

  private _convertToMesure(fb: FormGroup): IMesureForm {
    return {
      valeur: fb.controls['valeur'].value
    }
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      valeur: [null, [
        Validators.min(0),
        Validators.max(250),
        Validators.required,
      ]]
    });
  }

  private _setMesure(object: IMesureModel): void {
    this.form.setValue({
      valeur: object.valeur
    })
  }
}
