import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ContaComponent } from './pages/conta/conta.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'user-list', component: UserListComponent },
  { path:'register', component: RegisterComponent },
  { path:'contato', component: ContatoComponent },
  { path:'conta', component: ContaComponent },
  { path:'**', component: NotFoundComponent },
];
