import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  template: `
      <div class="splash-screen">
          <h1>Explor<span class="bold">AR</span></h1>
          <p>Découvrez l'histoire en réalité augmentée</p>
      </div>
  `,
  styles: [`
    .splash-screen {
      background-color: var(--primary-color);
      color: var(--secondary-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }
    h1 {
      font-size: 3em;
      margin-bottom: 20px;
    }
    .bold {
      font-weight: 700;
    }
    p {
      font-size: 1.2em;
      margin-top: 0;
    }
  `]
})
export class SplashScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}
