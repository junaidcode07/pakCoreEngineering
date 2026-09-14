import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(router: Router) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type === 'reload' && window.location.pathname !== '/') {
      void router.navigateByUrl('/');
    }
  }
}