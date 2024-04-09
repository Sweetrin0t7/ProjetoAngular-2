import { CommonModule } from '@angular/common';
import { AuthService } from '../../pages/conta/auth.service';
import { RegisterComponent } from './../../pages/register/register.component';
import { RegisterService } from './../../pages/register/register.service';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
