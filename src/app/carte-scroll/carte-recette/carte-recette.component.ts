import { Component, Input } from '@angular/core';
import { CardRecipe } from 'src/assets/models/card-recipe';

@Component({
  selector: 'app-carte-recette',
  templateUrl: './carte-recette.component.html',
  styleUrls: ['./carte-recette.component.scss']
})
export class CarteRecetteComponent {
  //récupère les données du cardRecipe depuis le carte-scroll
  @Input() card:CardRecipe;

  cardTitle: string;
  cardUrl: string;
  cardDescription: string;

  ngOnInit(){
    this.cardTitle = this.card.titre;
    this.cardUrl = this.card.imageUrl;
    this.cardDescription = this.card.description;
  }
}
