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
import { Router } from '@angular/router';
import { InputControlComponent } from '../../../shared/input-control/input-control.component';
import { NgIf } from '@angular/common';
import {
  NgxSimpleTextEditorModule,
  EditorConfig,
} from 'ngx-simple-text-editor';

@Component({
  selector: 'app-movies-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputControlComponent,
    NgIf,
    NgxSimpleTextEditorModule,
  ],
  templateUrl: './movies-create.component.html',
  styleUrl: './movies-create.component.scss',
})
export class MoviesCreateComponent {
  form!: FormGroup;
  movies: any;
  movieId: any;

  config: EditorConfig = {
    placeholder: 'Film Açıklamasını Giriniz',
  };

  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      overview: ['', [Validators.required, Validators.minLength(100)]],
    });
  }

  create() {
    const request = {
      title: this.form.get('title')?.value,
      overview: this.form.get('overview')?.value,
    };

    this.moviesService.postMovies(request, (res) => {
      this.router.navigateByUrl('/movies');
      console.log('Başarılı', res);
    });
  }

  public get newTitle(): FormControl {
    return this.form.get('title') as FormControl;
  }

  public get newOverview(): FormControl {
    return this.form.get('overview') as FormControl;
  }
}
