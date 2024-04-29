
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
  pelicula.isFavorite = !pelicula.isFavorite;  // Cambia el estado de favorito cada vez que se haga clic.
  console.log("Película favorita:", pelicula.isFavorite, pelicula.title);  // Verifica el cambio.
  if (pelicula.isFavorite) {
    this.favoritosService.agregarAFavoritos(pelicula);
  }
  else {
    this.favoritosService.eliminarDeFavoritos(pelicula);
  }

}

toggleSeen(pelicula: pelicula) {
  pelicula.seen = !pelicula.seen;  // Cambia el estado de visto cada vez que se haga clic.
  console.log("Película vista:", pelicula.seen, pelicula.title);  // Verifica el cambio.
}

}
