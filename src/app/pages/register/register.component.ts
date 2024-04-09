import { User } from './../../components/user/user.models';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from './register.service';
import { ContaComponent } from '../conta/conta.component';
import { UserService } from '../../components/user/user.service';
import { AuthService } from '../conta/auth.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, ContaComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  registerForm: FormGroup;
  responseData: any;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private registerService: RegisterService,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get emailControl(): AbstractControl {
    return this.registerForm.get('email')!;
  }

  get passwordControl(): AbstractControl {
    return this.registerForm.get('password')!;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerService.registerUser(this.registerForm.value.email, this.registerForm.value.password).subscribe(response => {
        this.registerService.getUsersById(response.id).subscribe(userData => {
          this.responseData = userData;
          this.userService.responseData = userData;
          this.authService.setAuthenticated(true);
          this.snackBar.open('Bem-Vindo ' + userData.data.first_name, 'Fechar', {
            duration: 3000,
            panelClass: ['custom-snackbar'],
          });
        });
      });
    }
  }

  getErrorMessage(control: AbstractControl): string | null {
    if (control.errors) {
      if (control.hasError('required')) {
        return 'Este campo é obrigatório.';
      } else if (control.hasError('email')) {
        return 'Formato de e-mail inválido.';
      } else if (control.hasError('minlength')) {
        return 'A senha deve ter no mínimo 6 caracteres.';
      }
    }
    return null;
  }
}
