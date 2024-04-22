import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: '', redirectTo: '/presentation', pathMatch: 'full' },  // redirect to '/home'
  { path: 'accueil', component: HomePageComponent },
  { path: 'presentation', component: IntroductionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
