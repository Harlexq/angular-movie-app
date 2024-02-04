import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-primary-btn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.scss',
})
export class PrimaryBtnComponent {
  @Input({ required: true }) path: string = '';
}
