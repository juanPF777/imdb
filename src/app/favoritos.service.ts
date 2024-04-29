// favoritos.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pelicula } from './interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritosSubject = new BehaviorSubject<pelicula[]>([]);
  favoritos$ = this.favoritosSubject.asObservable();

  agregarAFavoritos(pelicula: pelicula) {
    const favoritosActuales = this.favoritosSubject.value;
    this.favoritosSubject.next([...favoritosActuales, pelicula]);
  }

  eliminarDeFavoritos(pelicula: pelicula) {
    const favoritosActuales = this.favoritosSubject.value.filter(p => p.title !== pelicula.title);
    this.favoritosSubject.next(favoritosActuales);
  }

  esFavorito(pelicula: pelicula): boolean {
    const favoritosActuales = this.favoritosSubject.value;
    return favoritosActuales.some(p => p.title === pelicula.title);
  }
}
