import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Monument {
  id: string;
  nom: string;
  adresse: string;
  commune: string;
  latitude: number;
  longitude: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MonumentsHistoriquesService {
  private apiUrl = 'https://data.culture.gouv.fr/api/records/1.0/search/';
  private dataset = 'liste-des-immeubles-proteges-au-titre-des-monuments-historiques';

  constructor(private http: HttpClient) {}

  getMonumentsRouen(): Observable<Monument[]> {
    const params = {
      dataset: this.dataset,
      rows: '100',
      refine: 'commune:Rouen',
      fields: 'ref,tico,adrs,wadrs,commune,coordonnees,dmaj'
    };

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => response.records.map((record: any) => ({
        id: record.fields.ref,
        nom: record.fields.tico,
        adresse: record.fields.adrs,
        commune: record.fields.commune,
        latitude: record.fields.coordonnees ? record.fields.coordonnees[0] : null,
        longitude: record.fields.coordonnees ? record.fields.coordonnees[1] : null,
        description: `Dernière mise à jour: ${record.fields.dmaj}`
      })))
    );
  }
}
