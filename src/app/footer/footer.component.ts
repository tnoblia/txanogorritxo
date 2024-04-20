import { Component } from '@angular/core';
import { ContactInfo } from 'src/assets/models/contact-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactInfos:ContactInfo[] = [
    {
      logoUrl: "assets/images/contact_logos/horaires.png",
      content: "10.00 - 17:00 lundi à vendredi",
      title:"Horaires",
      linkUrl:"https://www.google.com/maps/place//data=!4m2!3m1!1s0xd51283bb2aec79f:0x28c2d86af9e79195?sa=X&ved=1t:8290&ictx=111"
    },
    {
      logoUrl: "assets/images/contact_logos/localisation.png",
      content: "Bourg 64430, 64430 Saint-Étienne-de-Baïgorry",
      title:"Localisation",
      linkUrl:"https://www.google.com/maps/place//data=!4m2!3m1!1s0xd51283bb2aec79f:0x28c2d86af9e79195?sa=X&ved=1t:8290&ictx=111"
    },
    {
      logoUrl: "assets/images/contact_logos/mail.png",
      content: "mai.noblia@gmail.com",
      title:"mail",
      linkUrl:"mai.noblia@gmail.com"
      //A voir si ça ne pose pas de problèmes pour des attaques par bot de mettre son adresse comme ça
    },
    {
      logoUrl: "assets/images/contact_logos/tel.png",
      content: "06 30 68 13 13",
      title:"téléphone",
      linkUrl:""
      //VOir comment faire pour mettre un numéro de tel ici.
    }
  ]

}
