import { Component, Input } from '@angular/core';
import { CardRecipe } from 'src/assets/models/card-recipe';

@Component({
  selector: 'app-carte-producteur',
  templateUrl: './carte-producteur.component.html',
  styleUrls: ['./carte-producteur.component.scss']
})
export class CarteProducteurComponent {
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
