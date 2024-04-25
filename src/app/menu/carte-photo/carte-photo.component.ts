import { Component, Input, OnInit } from '@angular/core';
import { CardPicture } from 'src/assets/models/card-picture';

@Component({
  selector: 'app-carte-photo',
  templateUrl: './carte-photo.component.html',
  styleUrls: ['./carte-photo.component.scss']
})
export class CartePhotoComponent implements OnInit{
  @Input() card:CardPicture;

  imageUrl: String;
  titre: String;
  ingredients:String;
  allergenes: String;

  ngOnInit(){
    this.imageUrl = this.card.imageUrl;
    this.titre = this.card.titre;
    this.ingredients = this.card.ingredients;
    this.allergenes = this.card.allergenes;
  }
}
