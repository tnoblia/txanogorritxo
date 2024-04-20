import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardRecipe } from 'src/assets/models/card-recipe';
@Component({
  selector: 'app-carte-scroll',
  templateUrl: './carte-scroll.component.html',
  styleUrls: ['./carte-scroll.component.scss']
})

export class CarteScrollComponent {
  @ViewChild('cardsContainer') private cardsContainer: ElementRef;


  cards:CardRecipe[] = [
    {
    imageUrl:"assets/images/creations/croq.jpg",
    titre :  "Tarte au citron",
    description:  "Notre tarte au citron est une célébration de la fraîcheur, apportant une touche acidulée à votre journée "
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      titre :  "Tarte aux fraises",
      description:  "Succulente tarte aux fraises, garnie de fruits rouges éclatants sur une crème pâtissière onctueuse, et une pâte sablée croustillante."
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      titre :  "Quiche au fromage",
      description:  "Savoureuse quiche au fromage, riche en Gruyère fondant, enveloppée d\'une croûte dorée et parfaite, pour un repas réconfortant."
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      titre :  "Quiche au fromage",
      description:  "Savoureuse quiche au fromage, riche en Gruyère fondant, enveloppée d\'une croûte dorée et parfaite, pour un repas réconfortant."
    }
];
// Un appel de service pour récupérer les données des cartes doit se faire ici.
  scrollLeft() {
    this.cardsContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
  this.cardsContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

}
