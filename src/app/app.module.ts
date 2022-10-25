import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { TargetMovieDirective } from './target-movie.directive';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RaclettePartyComponent } from './raclette-party/raclette-party.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    DisplayMoviesDirective,
    TargetMovieDirective,
    SignupComponent,
    NavbarComponent,
    RaclettePartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
