import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = true;
  isGuestListDisplayed: boolean = true;
  showMovies: boolean = true;

  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
  movieList: string[] = ['Le Seigneur des Anneaux', 'The Craft', 'Forrest Gump'];
}
