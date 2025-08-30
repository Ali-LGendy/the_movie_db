import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Categorize',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Movies',
            icon: 'pi pi-bolt',
            routerLink: '/movies',
          },
          {
            label: 'Series',
            icon: 'pi pi-server',
            routerLink: '/series',
          },
          {
            separator: true,
          },
          {
            label: 'Actors',
            icon: 'pi pi-pencil',
            routerLink: '/actors',
          },
        ],
      },
    ];
  }
}
