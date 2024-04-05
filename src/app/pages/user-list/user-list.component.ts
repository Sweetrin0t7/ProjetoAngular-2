import { Component, OnInit } from '@angular/core';
import { UserService } from '../../components/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  users: any[] = [];
  currentPage = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers(this.currentPage).subscribe(
      (data) => {
        this.users = data.data;
      },
      (error) => {
        console.error('Erro ao carregar usuários:', error);
      }
    );
  }

  nextPage() {
    this.currentPage++;
    this.fetchUsers();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchUsers();
    }
  }

}
