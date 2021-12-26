import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMensurationModel} from "../../../../../core/models";
import {IMesureModel} from "../../../../../core/models/imesure-model";
import {UserService} from "../../../../../core/services/api";
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mensurations-details',
  templateUrl: './mensurations-details.component.html',
  styleUrls: ['./mensurations-details.component.scss']
})
export class MensurationsDetailsComponent implements OnInit {
  public mensuration!: IMensurationModel;
  public mesures: IMesureModel[] = [];

  public form!: FormGroup;

  public get mesureArray(): FormArray {
    return this.form.controls['mesures'] as FormArray;
  }

  constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute, private _userService: UserService) {
  }

  ngOnInit(): void {
    this.mensuration = this._route.snapshot.data['model'];
    this._initForm();
    if (this.mensuration) {
      this._userService.getMesures(this.mensuration.id).subscribe({
        next: (res) => {
          this.mesures = res;
          if (res) {
            for (let i = 0; i < res.length; i++) {
              this._addMesure();
            }
          }
        },
        error: (error) => console.error(error)
      })
    }
  }

  public asFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  private _addMesure(): void {
    this.mesureArray.push(this._formBuilder.group({
      valeur: [null, [
        Validators.min(0),
        Validators.max(250),
        Validators.required,
      ]]
    }))
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      mesures: this._formBuilder.array([])
    });
  }
}
