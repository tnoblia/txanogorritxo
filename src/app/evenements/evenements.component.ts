import { Component } from '@angular/core';
import { EventInfo } from 'src/assets/models/event-info';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent {

  events:EventInfo[] = [
    {
      imageUrl : "assets/images/creations/croq.jpg",
      date: '12/11/2024',
      titre:"Cours croques",
      description:"Apprenez à faire des croques",
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      titre :  "Cours tartes aux fraises",
      date: '20/11/2024',
      description:  "Apprenez à faire de succulentes tartes aux fraises"
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      date: '12/09/2024',
      titre :  "Cours quiche au fromage",
      description:  "Apprenez à faire de savoureuses quiches au fromage, riche en Gruyère fondant, enveloppée d\'une croûte dorée et parfaite, pour un repas réconfortant."
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      date: '12/12/2024',
      titre :  "Cours quiche au boudins",
      description:  "Apprenez à faire de savoureuses quiches au boudins, riche en Gruyère fondant, enveloppée d\'une croûte dorée et parfaite, pour un repas réconfortant."
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      date: '30/11/2024',
      titre :  "Cours andouillettes",
      description:  "Apprenez à faire de savoureuses andouillettes."
    },]

}
