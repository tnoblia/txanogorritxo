import { Component, Input } from '@angular/core';
import { EventInfo } from 'src/assets/models/event-info';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.scss']
})
export class EventContainerComponent {
  @Input() event:EventInfo;
  @Input() position:number;

  eventTitle: string;
  eventImageUrl: string;
  eventDescription: string;
  eventDate: string;
  indexNum:number;

  ngOnInit(){
    this.eventTitle = this.event.title;
    this.eventImageUrl = this.event.imageUrl;
    this.eventDate = this.event.date;
    this.eventDescription = this.event.description;
    this.indexNum = this.position;
  }
}
