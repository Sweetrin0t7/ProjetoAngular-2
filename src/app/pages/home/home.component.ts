import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserListComponent, ContatoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Bem Vindo(a) ao Angular';
}
