import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ar-view',
  templateUrl: './ar-view.component.html',
  styleUrls: ['./ar-view.component.css']
})
export class ArViewComponent implements OnInit {
  selectedMonument: { latitude: number, longitude: number } | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer les coordonnées transmises via le routeur
    this.route.params.subscribe(params => {
      const latitude = +params['latitude'];
      const longitude = +params['longitude'];

      // Assigner les coordonnées du monument
      this.selectedMonument = { latitude, longitude };

      // Logique supplémentaire pour afficher le monument sur l'écran AR
      console.log(`Affichage du monument à : ${latitude}, ${longitude}`);
    });
  }
}
