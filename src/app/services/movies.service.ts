import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './errorhandler.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService extends ErrorHandlerService {
  apiUrl = 'https://api.themoviedb.org/3';
  apiKey = '32f2ab8993c572c9626517d2e61d4fa7';

  constructor(private http: HttpClient) {
    super();
  }

  getMovies(callback: (res: any) => void) {
    this.http
      .get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`)
      .subscribe({
        next: (res) => {
          callback(res);
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler(err);
        },
      });
  }

  getMoviesDetail(movieId: any, callback: (res: any) => void) {
    this.http
      .get(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`)
      .subscribe({
        next: (res) => {
          callback(res);
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler(err);
        },
      });
  }

  postMovies(newMovie: any, callback: (res: any) => void) {
    this.http
      .post(`${this.apiUrl}/movie?api_key=${this.apiKey}`, newMovie)
      .subscribe({
        next: (res) => {
          callback(res);
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler(err);
        },
      });
  }

  putMovies(movieId: any, updatedMovie: any, callback: (res: any) => void) {
    this.http
      .put(
        `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`,
        updatedMovie
      )
      .subscribe({
        next: (res) => {
          callback(res);
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler(err);
        },
      });
  }

  deleteMovies(movieId: any, callback: (res: any) => void) {
    this.http
      .delete(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`)
      .subscribe({
        next: (res) => {
          callback(res);
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler(err);
        },
      });
  }
}
