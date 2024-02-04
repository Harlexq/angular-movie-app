import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input-control',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.scss',
})
export class InputControlComponent {
  @Input({ required: true }) labelName: string = '';
  @Input({ required: true }) form!: FormGroup;
  @Input() placeholder: string = '';
  @Input() type?: 'text' | 'password' | 'email' | 'number' | 'date' = 'text';
  @Input({ required: true }) fc: FormControl = new FormControl();
  @Input() controlId: string = '';
}
