import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginForm } from 'src/app/models/forms';
import { AuthService } from 'src/app/services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public errorMessage!: string;
  public submitted: boolean = false;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  initForm() {
    this.loginForm = this._formBuilder.group({
      email: ['samadh90@hotmail.fr', [Validators.required, Validators.email]],
      password: ['Samadh9022+', Validators.required],
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    const payload: ILoginForm = this.loginForm.value;

    this._authService.login(payload).subscribe({
      next: (v) => {
        this._router.navigate(['account']);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  public inputStatus(field: string): string {
    if (this.submitted && this.loginForm.controls[field].errors)
      return 'is-invalid';
    if (this.submitted && !this.loginForm.controls[field].errors)
      return 'is-valid';
    else return '';
  }

  ngOnInit(): void {
    this.initForm();
  }
}
