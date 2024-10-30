import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  dropdowns = {
    products: false,
    solutions: false,
  };

  toggleDropdown(menu: 'products' | 'solutions') {
    this.dropdowns[menu] = !this.dropdowns[menu];
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
