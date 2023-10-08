import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Prabhas'},
      { id: 2, name: 'Ram Charan' },
      { id: 3, name: 'NTR' },
      { id: 4, name: 'Allu Arjun' },
      { id: 5, name: 'Yash' },
      { id: 6, name: 'RDJ' },
      { id: 7, name: 'Chirs Hemsworth' },
      { id: 8, name: 'Chirs Evans' },
      { id: 9, name: 'Tom Holland' },
      { id: 10, name: 'Vin Diesel' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
