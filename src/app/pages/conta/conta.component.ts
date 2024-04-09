import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from '../../components/user/user.service';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.scss'
})
export class ContaComponent {
  constructor(public userService: UserService) { }

}
