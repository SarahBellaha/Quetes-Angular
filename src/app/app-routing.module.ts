import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: "", redirectTo: "user-profile", pathMatch: "full"},
  {path: "user-profile", component: UserProfileComponent},
  {path: "signup", component: SignupComponent},
  {path: "commande", component: MyFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
