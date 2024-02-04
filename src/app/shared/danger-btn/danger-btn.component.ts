import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-danger-btn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './danger-btn.component.html',
  styleUrl: './danger-btn.component.scss',
})
export class DangerBtnComponent {
  @Input({ required: true }) path: string = '';
}
