import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin  from '@fullcalendar/interaction';
import { EventInfo } from 'src/assets/models/event-info';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() events:EventInfo[];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [daygridPlugin,interactionPlugin]
  };

  ngOnInit(){
    const rootStyles = getComputedStyle(document.documentElement);
    const primaryColor = rootStyles.getPropertyValue('--main-color').trim();
    const secondaryColor = rootStyles.getPropertyValue('--secondary-color').trim();
    const fontColor = rootStyles.getPropertyValue('--font-color').trim();
    setTimeout(() => {
      this.calendarOptions = {
        locale: 'fr',
        events:this.events,
        eventDisplay: 'block',
        eventBackgroundColor:primaryColor,
        eventTextColor:fontColor,
        displayEventTime:true,
        buttonText:{today:"Aujourd'hui"}
      }
    }, 500);

  }

}
