import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MoviesService } from '../../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InputControlComponent } from '../../../shared/input-control/input-control.component';
import { NgIf } from '@angular/common';
import {
  NgxSimpleTextEditorModule,
  EditorConfig,
} from 'ngx-simple-text-editor';

@Component({
  selector: 'app-movies-update',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputControlComponent,
    NgIf,
    NgxSimpleTextEditorModule,
  ],
  templateUrl: './movies-update.component.html',
  styleUrl: './movies-update.component.scss',
})
export class MoviesUpdateComponent {
  form!: FormGroup;
  movies: any;
  movieId: any;

  config: EditorConfig = {
    placeholder: 'Film Açıklamasını Giriniz',
  };

  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateForm();

    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');

    this.moviesService.getMoviesDetail(this.movieId, (res) => {
      this.movies = res;
      this.form.patchValue({
        title: this.movies.title,
        overview: this.movies.overview,
        releaseDate: this.movies.release_date,
      });
    });
  }

  updateForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      overview: ['', [Validators.required, Validators.minLength(100)]],
      releaseDate: ['', Validators.required],
    });
  }

  update() {
    const request = {
      title: this.form.get('title')?.value,
      overview: this.form.get('overview')?.value,
      releaseDate: this.form.get('releaseDate')?.value,
    };

    this.moviesService.putMovies(this.movies.id, request, (res) => {
      this.router.navigateByUrl('/movies');
      console.log('Başarılı');
    });
  }

  public get newTitle(): FormControl {
    return this.form.get('title') as FormControl;
  }

  public get newOverview(): FormControl {
    return this.form.get('overview') as FormControl;
  }

  public get newreleaseDate(): FormControl {
    return this.form.get('releaseDate') as FormControl;
  }
}
