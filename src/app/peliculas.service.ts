import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PeliculaResults, pelicula } from './interfaces/pelicula';
import { FavoritosService } from './favoritos.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '35b43851e31f5fa08117dc90fc49c66e';

  constructor(private http: HttpClient) {}
  private favoritesService: FavoritosService = new FavoritosService();

  getPeliculas(): Observable<PeliculaResults> {
    return this.http.get<{results: any[], page: number, total_results: number, total_pages: number}>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    ).pipe(
      map(response => ({
        results: response.results.map(item => {
          const isFavorite = this.favoritesService.esFavorito({
            title: item.title,
            imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            overview: item.overview
          });
          return {
            title: item.title,
            imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            overview: item.overview,
            isFavorite: isFavorite
          };
        }),
        page: response.page,
        total_results: response.total_results,
        total_pages: response.total_pages
      })),
      catchError(error => {
        console.error('Error fetching movies:', error);
        return of({results: [], page: 0, total_results: 0, total_pages: 0});
      })
    );
  }
}
