import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { StarshipsComponent } from './starships/starships.component';
import { FilmsComponent } from './films/films.component';

export const routes: Routes = [
    { path: 'characters-component', component: CharactersComponent },
    { path: 'starships-component', component: StarshipsComponent },
    { path: 'films-component', component: FilmsComponent },
];
