import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((c) => c.LayoutComponent),
    title: 'Home',
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./layout/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'movies',
        loadComponent: () =>
          import('./layout/movies/movies.component').then(
            (c) => c.MoviesComponent
          ),
      },
      {
        path: 'movie-update/:id',
        loadComponent: () =>
          import('./layout/movies/movies-update/movies-update.component').then(
            (c) => c.MoviesUpdateComponent
          ),
      },
      {
        path: 'movie-detail/:id',
        loadComponent: () =>
          import('./layout/movies/movies-detail/movies-detail.component').then(
            (c) => c.MoviesDetailComponent
          ),
      },
      {
        path: 'movies-create',
        loadComponent: () =>
          import('./layout/movies/movies-create/movies-create.component').then(
            (c) => c.MoviesCreateComponent
          ),
      },
    ],
  },
];
