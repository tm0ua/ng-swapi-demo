import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { StarshipsComponent } from './starships/starships.component';
import { FilmsComponent } from './films/films.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

export const routes: Routes = [
    {
        path: 'characters',
        component: CharactersComponent,
        children: [
            {
                path:'character-details', component: CharacterDetailsComponent
            }
        ]
     },
    { path: 'starships-component', component: StarshipsComponent },
    { path: 'films-component', component: FilmsComponent },
];
