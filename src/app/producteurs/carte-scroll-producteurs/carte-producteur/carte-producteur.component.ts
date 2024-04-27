import { Component, Input } from '@angular/core';
import { CardProducer } from 'src/assets/models/card-producer';

@Component({
  selector: 'app-carte-producteur',
  templateUrl: './carte-producteur.component.html',
  styleUrls: ['./carte-producteur.component.scss']
})
export class CarteProducteurComponent {
   //récupère les données du cardRecipe depuis le carte-scroll
   @Input() card:CardProducer;

   cardTitle: String;
   cardUrl: String;
   cardDescription: String;
   cardLink: String;

   ngOnInit(){
     this.cardTitle = this.card.titre;
     this.cardUrl = this.card.imageUrl;
     this.cardDescription = this.card.description;
     this.cardLink = this.card.link;
   }

}
