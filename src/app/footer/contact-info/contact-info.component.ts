import { Component, Input } from '@angular/core';
import { ContactInfo } from 'src/assets/models/contact-info';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {
  @Input() contactInfo:ContactInfo;

  infoLogoUrl : string;
  infoContent: string;
  infoTitle:string;
  infoLinkUrl:string;

  ngOnInit(){
    this.infoLogoUrl = this.contactInfo.logoUrl;
    this.infoContent = this.contactInfo.content;
    this.infoTitle = this.contactInfo.title;
    this.infoLinkUrl = this.contactInfo.linkUrl;
  }

}
