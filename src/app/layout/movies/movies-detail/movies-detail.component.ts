import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-movies-detail',
  standalone: true,
  imports: [NgIf, DatePipe, NgFor],
  templateUrl: './movies-detail.component.html',
  styleUrl: './movies-detail.component.scss',
})
export class MoviesDetailComponent {
  movieId: any;
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.moviesService.getMoviesDetail(this.movieId, (res) => {
      this.movie = res;
      console.log(res);
    });
  }
}
