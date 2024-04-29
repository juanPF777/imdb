import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { PeliculasComponent } from '../../common/peliculas/peliculas.component'; 
import { FavoritosService } from '../../favoritos.service';
import { pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-p-favoritos',
  standalone: true,
  imports: [CommonModule, AsyncPipe, PeliculasComponent], 
  templateUrl: './p-favoritos.component.html',
  styleUrls: ['./p-favoritos.component.css']
})
export class PFavoritosComponent implements OnInit {
  favoritos: pelicula[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }
  toggleFavorite(pelicula: pelicula) {
    this.favoritosService.eliminarDeFavoritos(pelicula);
    
    this.favoritos = this.favoritos.filter(p => p.title !== pelicula.title);
}
}
