import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MenuComponent } from './menu/menu.component';
import { ProducteursComponent } from './producteurs/producteurs.component';
import { EvenementsComponent } from './evenements/evenements.component';

const routes: Routes = [
  { path: '', redirectTo: '/presentation', pathMatch: 'full' },  // redirect to '/home'
  { path: 'accueil', component: HomePageComponent },
  { path: 'presentation', component: IntroductionComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'producteurs', component: ProducteursComponent },
  { path: 'evenements', component: EvenementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
