import { Component } from '@angular/core';
import { CardsComponent } from '../home/cards/cards.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {}
