import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  registerForm: FormGroup;
  responseData: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) {
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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (this.registerForm.valid) {
      this.http.post('/api/register', this.registerForm.value, { headers, responseType: 'text' })
        .subscribe(
          (response) => {
            this.responseData = response;
            this.snackBar.open('Conta Criada com Sucesso!', 'Fechar', {
              duration: 3000,
            });
          },
          (error) => {
            console.error('Erro na solicitação:', error);
          }
        );
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
