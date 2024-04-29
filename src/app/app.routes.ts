
import { Routes } from '@angular/router';
import { PPeliculasComponent } from './pages/p-peliculas/p-peliculas.component';
import { PFavoritosComponent } from './pages/p-favoritos/p-favoritos.component';

export const routes: Routes = [
  { path: '', component: PPeliculasComponent },
  { path: 'peliculas', component: PPeliculasComponent },
  { path: 'favoritos', component: PFavoritosComponent }
];

