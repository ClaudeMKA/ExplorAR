import { Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { HomeComponent } from './home/home.component';
import { ArViewComponent } from './ar-view/ar-view.component';

export const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ar-view/:latitude/:longitude', component: ArViewComponent },
  { path: '**', redirectTo: '' }
];
