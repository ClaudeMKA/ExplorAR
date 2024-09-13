import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-container">
      <header>
        <img src="assets/logo-white.png" alt="ExplorAR Logo" class="logo">
      </header>

      <nav>
        <button (click)="switchTab('explore')" [class.active]="activeTab === 'explore'">
          <i class="fas fa-compass"></i>
          <span>Explorer</span>
        </button>
        <button (click)="switchTab('tours')" [class.active]="activeTab === 'tours'">
          <i class="fas fa-route"></i>
          <span>Circuits</span>
        </button>
        <button (click)="switchTab('ar')" [class.active]="activeTab === 'ar'">
          <i class="fas fa-vr-cardboard"></i>
          <span>AR</span>
        </button>
        <button (click)="switchTab('profile')" [class.active]="activeTab === 'profile'">
          <i class="fas fa-user"></i>
          <span>Profil</span>
        </button>
      </nav>

      <main>
        <section *ngIf="activeTab === 'explore'" class="explore-section">
          <h2>Découvrez Rouen</h2>
          <p class="subtitle">Explorez l'histoire et la culture de Rouen en réalité augmentée</p>
          <div class="featured-attraction">
            <img src="assets/cathedrale.jpeg" alt="Cathédrale de Rouen">
            <div class="attraction-info">
              <h3>Cathédrale Notre-Dame</h3>
              <p>Chef-d'œuvre gothique, lieu d'inspiration de Monet</p>
              <button (click)="startARExperience('cathedrale')" class="ar-button">
                <i class="fas fa-play"></i> Lancer l'expérience AR
              </button>
            </div>
          </div>
          <div class="quick-access">
            <h3>Attractions populaires</h3>
            <div class="attraction-grid">
              <div class="attraction-card" *ngFor="let attraction of popularAttractions">
                <img [src]="attraction.image" [alt]="attraction.name">
                <h4>{{ attraction.name }}</h4>
                <button (click)="startARExperience(attraction.id)" class="ar-button">AR</button>
              </div>
            </div>
          </div>
        </section>

        <section *ngIf="activeTab === 'tours'" class="tours-section">
          <h2>Circuits thématiques</h2>
          <div class="tour-list">
            <div class="tour-card" *ngFor="let tour of thematicTours">
              <img [src]="tour.image" [alt]="tour.name">
              <div class="tour-info">
                <h3>{{ tour.name }}</h3>
                <p>{{ tour.description }}</p>
                <div class="tour-details">
                  <span><i class="fas fa-clock"></i> {{ tour.duration }}</span>
                  <span><i class="fas fa-map-marker-alt"></i> {{ tour.stops }} arrêts</span>
                </div>
                <button (click)="startTour(tour.id)" class="start-tour-button">Commencer</button>
              </div>
            </div>
          </div>
        </section>

        <section *ngIf="activeTab === 'ar'" class="ar-section">
          <h2>Mode Réalité Augmentée</h2>
          <p class="subtitle">Pointez votre caméra vers un monument pour obtenir des informations</p>
          <div class="ar-preview">
            <img src="assets/ar-preview.jpeg" alt="Aperçu AR">
            <div class="ar-controls">
              <button (click)="toggleAR()" class="ar-toggle-button">
                {{ arActive ? 'Désactiver AR' : 'Activer AR' }}
              </button>
              <button (click)="calibrateAR()" class="ar-calibrate-button">
                <i class="fas fa-crosshairs"></i> Calibrer
              </button>
            </div>
          </div>
          <div class="ar-instructions">
            <h3>Comment utiliser le mode AR</h3>
            <ol>
              <li>Activez le mode AR</li>
              <li>Pointez votre caméra vers un monument</li>
              <li>Explorez les informations qui apparaissent</li>
              <li>Interagissez avec les éléments 3D</li>
            </ol>
          </div>
        </section>

        <section *ngIf="activeTab === 'profile'" class="profile-section">
          <div class="profile-header">
            <img src="assets/avatar.jpeg" alt="Avatar" class="avatar">
            <h2>Petyth Prince</h2>
            <p class="subtitle">Explorateur passionnée de Rouen</p>
          </div>
          <div class="stats-grid">
            <div class="stat-item">
              <i class="fas fa-map-marker-alt"></i>
              <h4>Lieux visités</h4>
              <p>12</p>
            </div>
            <div class="stat-item">
              <i class="fas fa-route"></i>
              <h4>Circuits complétés</h4>
              <p>3</p>
            </div>
            <div class="stat-item">
              <i class="fas fa-trophy"></i>
              <h4>Niveau</h4>
              <p>Explorateur d'Or</p>
            </div>
          </div>
          <div class="achievements">
            <h3>Réalisations</h3>
            <div class="achievement-list">
              <div class="achievement">
                <i class="fas fa-medal"></i>
                <span>Maître de la Cathédrale</span>
              </div>
              <div class="achievement">
                <i class="fas fa-history"></i>
                <span>Voyageur du Temps Médiéval</span>
              </div>
              <div class="achievement">
                <i class="fas fa-palette"></i>
                <span>Sur les Pas de Monet</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
    }
    .app-container {
      background-color: #121212;
      color: #ffffff;
      min-height: 100vh;
      padding: 20px;
      box-sizing: border-box;
    }
    header {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    .logo {
      height: 60px;
      width: auto;
    }
    nav {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
      background-color: #1e1e1e;
      border-radius: 15px;
      padding: 10px;
      box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    }
    nav button {
      background: none;
      border: none;
      color: #b3b3b3;
      font-size: 14px;
      padding: 10px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 0.3s ease;
    }
    nav button i {
      font-size: 20px;
      margin-bottom: 5px;
    }
    nav button.active {
      color: #ffffff;
      background-color: #2c2c2c;
      border-radius: 10px;
    }
    main {
      padding-bottom: 60px;
    }
    h2 {
      font-size: 28px;
      margin-bottom: 15px;
      text-align: center;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .subtitle {
      text-align: center;
      color: #b3b3b3;
      margin-bottom: 20px;
    }
    .featured-attraction {
      background-color: #1e1e1e;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 30px;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    }
    .featured-attraction img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .attraction-info {
      padding: 20px;
    }
    .attraction-info h3 {
      font-size: 24px;
      margin-bottom: 10px;
      color: #ffffff;
    }
    .attraction-info p {
      color: #b3b3b3;
      margin-bottom: 15px;
    }
    .ar-button {
      background-color: #4CAF50;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    .ar-button:hover {
      background-color: #45a049;
    }
    .ar-button i {
      margin-right: 10px;
    }
    .quick-access {
      margin-top: 30px;
    }
    .quick-access h3 {
      font-size: 20px;
      margin-bottom: 15px;
      color: #ffffff;
    }
    .attraction-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    .attraction-card {
      background-color: #1e1e1e;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    }
    .attraction-card img {
      width: 100%;
      height: 120px;
      object-fit: cover;
    }
    .attraction-card h4 {
      padding: 10px;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
    }
    .attraction-card .ar-button {
      width: 100%;
      border-radius: 0;
    }
    .tour-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .tour-card {
      background-color: #1e1e1e;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
      display: flex;
    }
    .tour-card img {
      width: 40%;
      object-fit: cover;
    }
    .tour-info {
      padding: 20px;
      flex-grow: 1;
    }
    .tour-info h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #ffffff;
    }
    .tour-info p {
      font-size: 14px;
      color: #b3b3b3;
      margin-bottom: 15px;
    }
    .tour-details {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    .tour-details span {
      color: #b3b3b3;
      font-size: 14px;
    }
    .tour-details i {
      margin-right: 5px;
    }
    .start-tour-button {
      background-color: #3498db;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .start-tour-button:hover {
      background-color: #2980b9;
    }
    .ar-section {
      text-align: center;
    }
    .ar-preview {
      background-color: #1e1e1e;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 30px;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    }
    .ar-preview img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .ar-controls {
      display: flex;
      justify-content: space-around;
      padding: 15px;
    }
    .ar-toggle-button, .ar-calibrate-button {
      background-color: #3498db;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .ar-toggle-button:hover, .ar-calibrate-button:hover {
      background-color: #2980b9;
    }
    .ar-instructions {
      background-color: #1e1e1e;
      border-radius: 15px;
      padding: 20px;
      text-align: left;
    }
    .ar-instructions h3 {
      font-size: 20px;
      margin-bottom: 15px;
      color: #ffffff;
    }
    .ar-instructions ol {
      padding-left: 20px;
      color: #b3b3b3;
    }
    .ar-instructions li {
      margin-bottom: 10px;
    }
    .profile-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
      border: 3px solid #ffffff;
      box-shadow: 0 4px 10px rgba(255, 255, 255, 0.3);
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin-bottom: 30px;
    }
    .stat-item {
      background-color: #1e1e1e;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      transition: transform 0.3s ease;
    }
    .stat-item:hover {
      transform: translateY(-5px);
    }
    .stat-item i {
      font-size: 24px;
      color: #3498db;
      margin-bottom: 10px;
    }
    .stat-item h4 {
      font-size: 14px;
      margin-bottom: 5px;
      color: #b3b3b3;
    }
    .stat-item p {
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
    }
    .achievements {
      background-color: #1e1e1e;
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    }
    .achievements h3 {
      font-size: 20px;
      margin-bottom: 15px;
      color: #ffffff;
      text-align: center;
    }
    .achievement-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
    }
    .achievement {
      background-color: #2c2c2c;
      border-radius: 10px;
      padding: 15px;
      display: flex;
      align-items: center;
      transition: transform 0.3s ease;
    }
    .achievement:hover {
      transform: translateX(5px);
    }
    .achievement i {
      font-size: 20px;
      color: #f1c40f;
      margin-right: 15px;
    }
    .achievement span {
      color: #ffffff;
    }
    @media (max-width: 768px) {
      .attraction-grid {
        grid-template-columns: 1fr;
      }
      .tour-card {
        flex-direction: column;
      }
      .tour-card img {
        width: 100%;
        height: 150px;
      }
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
  activeTab: 'explore' | 'tours' | 'ar' | 'profile' = 'explore';
  arActive = false;

  popularAttractions = [
    { id: 'gros-horloge', name: 'Gros-Horloge', image: 'assets/gros-horloge.jpeg', latitude: 49.4403, longitude: 1.0946 },
    { id: 'vieux-marche', name: 'Place du Vieux-Marché', image: 'assets/vieux-marche.jpeg', latitude: 49.4419, longitude: 1.0925 },
    { id: 'sainte-jeanne-darc', name: 'Église Sainte-Jeanne-d\'Arc', image: 'assets/sainte-jeanne-darc.jpeg', latitude: 49.4423, longitude: 1.0912 },
    { id: 'abbatiale-saint-ouen', name: 'Abbatiale Saint-Ouen', image: 'assets/abbatiale-saint-ouen.jpeg', latitude: 49.4438, longitude: 1.0992 },
  ];

  thematicTours = [
    {
      id: 'medieval-rouen',
      name: 'Rouen Médiéval',
      description: 'Découvrez l\'histoire médiévale fascinante de Rouen à travers ses monuments emblématiques.',
      image: 'assets/medieval-rouen.jpeg',
      duration: '2h30',
      stops: 6
    },
    {
      id: 'impressionist-rouen',
      name: 'Rouen des Impressionnistes',
      description: 'Suivez les pas de Monet et découvrez les lieux qui ont inspiré les peintres impressionnistes.',
      image: 'assets/impressionist-rouen.jpg',
      duration: '2h',
      stops: 5
    },
    {
      id: 'joan-of-arc',
      name: 'Sur les Traces de Jeanne d\'Arc',
      description: 'Revivez l\'histoire de Jeanne d\'Arc à Rouen, de son procès à sa réhabilitation.',
      image: 'assets/joan-of-arc-tour.jpg',
      duration: '3h',
      stops: 7
    }
  ];

  constructor(private router: Router) {}

  switchTab(tab: 'explore' | 'tours' | 'ar' | 'profile') {
    this.activeTab = tab;
  }

  startARExperience(attractionId: string) {
    // Cherchez le monument correspondant
    const monument = this.popularAttractions.find(attraction => attraction.id === attractionId);

    if (monument) {
      // Logique pour démarrer l'expérience AR pour l'attraction spécifique avec les coordonnées
      console.log(`Démarrage de l'expérience AR pour : ${monument.name}`);

      // Supposons que chaque attraction ait des coordonnées latitude et longitude
      const coordinates = {
        latitude: monument.latitude,
        longitude: monument.longitude
      };

      // Naviguer vers la vue AR en passant les coordonnées
      this.router.navigate(['/ar-view', attractionId]);
    }
  }

  startTour(tourId: string) {
    // Logique pour démarrer le circuit thématique
    console.log(`Démarrage du circuit : ${tourId}`);
    this.router.navigate(['/tour', tourId]);
  }

  toggleAR() {
    this.arActive = !this.arActive;
    console.log(`Mode AR ${this.arActive ? 'activé' : 'désactivé'}`);
    // Logique pour activer/désactiver le mode AR
  }

  calibrateAR() {
    console.log('Calibrage du mode AR');
    // Logique pour calibrer le mode AR
  }
}
