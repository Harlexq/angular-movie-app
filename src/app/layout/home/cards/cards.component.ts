import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Movies } from '../../../models/movies';
import { RouterLink } from '@angular/router';
import { PrimaryBtnComponent } from '../../../shared/primary-btn/primary-btn.component';
import { DangerBtnComponent } from '../../../shared/danger-btn/danger-btn.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink, PrimaryBtnComponent, DangerBtnComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  movies: Movies[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.get();
  }

  get() {
    this.moviesService.getMovies((res) => {
      this.movies = res.results;
      console.log(res);
    });
  }
}
