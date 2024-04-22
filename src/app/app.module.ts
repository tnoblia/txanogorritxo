import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteRecetteComponent } from './home-page/carte-scroll/carte-recette/carte-recette.component';
import { CarteScrollComponent } from './home-page/carte-scroll/carte-scroll.component';
import { FooterComponent } from './footer/footer.component';
import { ContactInfoComponent } from './footer/contact-info/contact-info.component';
import { AccueilComponent } from './home-page/accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteRecetteComponent,
    CarteScrollComponent,
    FooterComponent,
    ContactInfoComponent,
    AccueilComponent,
    NavbarComponent,
    HomePageComponent,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
