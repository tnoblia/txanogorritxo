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
      date: '2024-07-20',
      title:"Cours croques",
      description:"Apprenez à faire des croques",
      timeStart:"12:00:00",
      timeEnd:"20:00:00"
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      title :  "Cours tartes aux fraises",
      date: '2024-07-11',
      description:  "Apprenez à faire de succulentes tartes aux fraises",
      timeStart:"12:00:00",
      timeEnd:"20:00:00"
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      date: '2024-09-20',
      title :  "Cours quiche au fromage",
      description:  "Apprenez à faire de savoureuses quiches au fromage, riche en Gruyère fondant, enveloppée d\'une croûte dorée et parfaite, pour un repas réconfortant.",
      timeStart:"12:00:00",
      timeEnd:"20:00:00"
    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      date: '2024-08-20',
      title :  "Cours quiche au boudins",
      description:  "Apprenez à faire de savoureuses quiches au boudins, riche en Gruyère fondant, enveloppée d\'une croûte dorée et parfaite, pour un repas réconfortant.",
      timeStart:"12:00:00",
      timeEnd:"20:00:00"

    },
    {
      imageUrl:"assets/images/creations/croq.jpg",
      date: '2024-08-12',
      title :  "Cours andouillettes",
      description:  "Apprenez à faire de savoureuses andouillettes.",
      timeStart:"12:00:00",
      timeEnd:"20:00:00"
    },]

}
