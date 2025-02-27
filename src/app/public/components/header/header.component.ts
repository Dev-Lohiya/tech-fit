import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Add event listener for the menu toggle
    const menuToggle = document.getElementById('menuToggle') as HTMLElement;
    const navContainer = document.getElementById('navContainer') as HTMLElement;

    if (menuToggle && navContainer) {
      menuToggle.addEventListener('click', () => {
        navContainer.classList.toggle('active');
      });
    }
  }

  // Toggle dropdown visibility when clicking the category or other nav item
  toggleDropdown(dropdownId: string): void {
    const dropdownMenu = document.getElementById(dropdownId);
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
    }
  }
}
