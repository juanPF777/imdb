import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PeliculasComponent } from '../../common/peliculas/peliculas.component';
import { PeliculasService } from '../../peliculas.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { PeliculaResults} from '../../interfaces/pelicula';
@Component({
  selector: 'app-p-peliculas',
  standalone: true,
  imports: [AsyncPipe, PeliculasComponent,],
  templateUrl: './p-peliculas.component.html',
  styleUrl: './p-peliculas.component.css'
})
export class PPeliculasComponent implements OnInit {

  public peliculaResults$!: Observable<PeliculaResults>;

  constructor(private service: PeliculasService){}
  ngOnInit(): void {
    this.peliculaResults$ = this.service.getPeliculas();
    
  }

}
