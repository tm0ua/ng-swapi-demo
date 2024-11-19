import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { StarshipsComponent } from './starships/starships.component';
import { FilmsComponent } from './films/films.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';

export const routes: Routes = [
    {
        path: 'characters',
        component: CharactersComponent,
        children: [
            {
                /**
                 * This example loads a new section of the parent page each time a link is clicked.
                 * Does not reload/navigate away from the parent page.
                 */
                path:'character-details/:id', component: CharacterDetailsComponent
            }
        ]
    },

    /**
     * This example will load a new character details page each time a character link is clicked.
     */
    // { path: 'characters/character-details/:id', component: CharacterDetailsComponent },

    { path: 'starships', component: StarshipsComponent },
    /**
     * This example loads/navigates to a new page each time a link is clicked.
     */
    { path: 'starships/starship-details/:id', component: StarshipDetailsComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'species', component: SpeciesComponent },
];
