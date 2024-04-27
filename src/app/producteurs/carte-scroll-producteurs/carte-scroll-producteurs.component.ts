import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardProducer } from 'src/assets/models/card-producer';

@Component({
  selector: 'app-carte-scroll-producteurs',
  templateUrl: './carte-scroll-producteurs.component.html',
  styleUrls: ['./carte-scroll-producteurs.component.scss']
})
export class CarteScrollProducteursComponent {
  @ViewChild('cardsContainer') private cardsContainer: ElementRef;


  cards:CardProducer[] = [
    {
    imageUrl:"assets/images/creations/croq.jpg",
    titre :  "Les verges de léonie",
    description:  "Fournisseur de nos citrons et fraises, Les Vergers de Léonie cultivent leurs fruits avec amour et respect de la nature, garantissant une fraîcheur et une saveur inégalées dans nos tartes.",
    link:"https://www.hellobank.fr/"
  },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      titre :  "La ferme du bocage",
      description:  "Spécialisée dans les produits laitiers, La Ferme du Bocage nous fournit un fromage exceptionnel, riche et crémeux, provenant directement de leurs vaches élevées en plein air.",
      link:"x"
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      titre :  "Les jardins de Solène",
      description:  "C'est grâce à Solène et ses méthodes de culture durables que nous pouvons garnir nos tartes de garnitures fraîches et biologiques, ajoutant une touche de nature et d'authenticité à chaque bouchée.",
      link:"x"
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      titre :  "Jamy",
      description:  "Savoureuse quiche au fromage, riche en Gruyère fondant, enveloppée d\'une croûte dorée et parfaite, pour un repas réconfortant.",
      link:"x"
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      titre :  "Fred",
      description:  "Savoureuse quiche au fromage, riche en Gruyère fondant, enveloppée d\'une croûte dorée et parfaite, pour un repas réconfortant.",
      link:"x"
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      titre :  "Thomas",
      description:  "Savoureuse quiche au fromage, riche en Gruyère fondant, enveloppée d\'une croûte dorée et parfaite, pour un repas réconfortant.",
      link:"x"
    },
];
// Un appel de service pour récupérer les données des cartes doit se faire ici.
  scrollLeft() {
    this.cardsContainer.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight() {
  this.cardsContainer.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }


}
