import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raclette-party',
  templateUrl: './raclette-party.component.html',
  styleUrls: ['./raclette-party.component.css']
})
export class RaclettePartyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isThisIngredientVital: boolean = true;
  isGuestListDisplayed: boolean = true;
  showMovies: boolean = true;

  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
  movieList: string[] = ['Le Seigneur des Anneaux', 'The Craft', 'Forrest Gump'];

}
