import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Ana Sayfa', routerLink: 'home' },
      { label: 'Filmler', routerLink: 'movies' },
    ];
  }
}
