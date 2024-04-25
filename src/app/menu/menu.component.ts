import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { CardPicture } from 'src/assets/models/card-picture';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  cards: CardPicture[] = [
    {
      imageUrl: 'assets/images/creations/croq.jpg',
      titre: 'Tarte au lardons',
      ingredients:
        'Farine, beurre, sucre, œufs, jus de citron, zeste de citron, sel',
      allergenes: ' Œufs, gluten, produits laitiers',
      type: 'sel',
    },
    {
      imageUrl: 'assets/images/creations/croq.jpg',
      titre: 'Tarte au lardons',
      ingredients:
        'Farine, beurre, sucre, œufs, jus de citron, zeste de citron, sel',
      allergenes: ' Œufs, gluten, produits laitiers',
      type: 'sel',
    },
    {
      imageUrl: 'assets/images/creations/croq.jpg',
      titre: 'Tarte au lardons',
      ingredients:
        'Farine, beurre, sucre, œufs, jus de citron, zeste de citron, sel',
      allergenes: ' Œufs, gluten, produits laitiers',
      type: 'sel',
    },
    {
      imageUrl: 'assets/images/creations/croq.jpg',
      titre: 'Tarte au lardons',
      ingredients:
        'Farine, beurre, sucre, œufs, jus de citron, zeste de citron, sel',
      allergenes: ' Œufs, gluten, produits laitiers',
      type: 'sel',
    },
    {
      imageUrl: 'assets/images/creations/tarte-fraises.JPG',
      titre: 'Tarte au citron',
      ingredients:
        'Farine, beurre, sucre, œufs, jus de citron, zeste de citron, sel',
      allergenes: ' Œufs, gluten, produits laitiers',
      type: 'sucre',
    },
    {
      imageUrl: 'assets/images/creations/tarte-fraises.JPG',
      titre: 'Tarte au citron',
      ingredients:
        'Farine, beurre, sucre, œufs, jus de citron, zeste de citron, sel',
      allergenes: ' Œufs, gluten, produits laitiers',
      type: 'sucre',
    },
    {
      imageUrl: 'assets/images/creations/tarte-fraises.JPG',
      titre: 'Tarte au citron',
      ingredients:
        'Farine, beurre, sucre, œufs, jus de citron, zeste de citron, sel',
      allergenes: ' Œufs, gluten, produits laitiers',
      type: 'sucre',
    },
    {
      imageUrl: 'assets/images/creations/tarte-fraises.JPG',
      titre: 'Tarte au citron',
      ingredients:
        'Farine, beurre, sucre, œufs, jus de citron, zeste de citron, sel',
      allergenes: ' Œufs, gluten, produits laitiers',
      type: 'sucre',
    },
    {
      imageUrl: 'assets/images/creations/tarte-fraises.JPG',
      titre: 'Tarte au citron',
      ingredients:
        'Farine, beurre, sucre, œufs, jus de citron, zeste de citron, sel',
      allergenes: ' Œufs, gluten, produits laitiers',
      type: 'sucre',
    },
  ];
  saltCards: CardPicture[] =this.cards.filter((card)=>card.type==='sel');
  sweetCards: CardPicture[] =this.cards.filter((card)=>card.type==='sucre');


}
