import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteRecetteComponent } from './carte-scroll/carte-recette/carte-recette.component';
import { CarteScrollComponent } from './carte-scroll/carte-scroll.component';
import { FooterComponent } from './footer/footer.component';
import { ContactInfoComponent } from './footer/contact-info/contact-info.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteRecetteComponent,
    CarteScrollComponent,
    FooterComponent,
    ContactInfoComponent,
    AccueilComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
