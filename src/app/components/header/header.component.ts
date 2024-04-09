import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../pages/conta/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBarComponent, CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'Reqres';

  constructor(private authService: AuthService) {}

  isUserAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }
}
