import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Footer } from '../../../../core/models/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  items: Footer[] = [
    { name: "Home", link: "/home", icon: "pi pi-home" },
    { name: "About Us", link: "/about-us", icon: "pi pi-info-circle" },
    { name: "Contact Us", link: "/contact-us", icon: "pi pi-phone" },
  ]
}
