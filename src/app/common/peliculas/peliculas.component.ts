
import { Component, Input } from '@angular/core';
import { pelicula } from '../../interfaces/pelicula';
import { FavoritosService } from '../../favoritos.service'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  @Input() peliculaInfo!: pelicula;

  constructor(private favoritosService: FavoritosService) {}


toggleFavorite(pelicula: pelicula) {
  if (this.favoritosService.esFavorito(pelicula)) {
    if (window.location.pathname === '/favoritos') {
      this.favoritosService.eliminarDeFavoritos(pelicula);
      pelicula.isFavorite = false; // Asegurarse de actualizar el estado
    } else {
      alert('Esta película ya está en favoritos.');
    }
  } else {
    this.favoritosService.agregarAFavoritos(pelicula);
    pelicula.isFavorite = true; // Asegurarse de actualizar el estado
  }
}

markAsSeen(pelicula: pelicula) {
  pelicula.seen = !pelicula.seen;  // Cambia el estado de visto cada vez que se haga clic.
  console.log("Película vista:", pelicula.seen, pelicula.title);  // Verifica el cambio.
}

}
